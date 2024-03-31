import response from "../api/response.js"
import model from "../models/index.js"
import bcrypt, { genSalt } from "bcrypt"
import jwt from "jsonwebtoken"
import Cookies from "js-cookie"

const controller = {}

controller.Register = async (req, res) => {
  let { username, email, password } = req.body

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  if (password.length < 8) {
    return response(403, [], "Password must be at least 8 character", res)
  }
  try {
    const [user, isExist] = await model.User.findOrCreate({
      where: {
        email,
      },
      defaults: {
        username,
        password: hashedPassword,
        email,
      },
    })
    if (!isExist) {
      return response(409, [], "Email already registered.", res)
    } else {
      return response(200, user, "Register Succesfully, please login to continue.", res)
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

controller.Login = async (req, res) => {
  try {
    let { email, password } = req.body
    const user = await model.User.findOne({
      where: {
        email,
      },
      include: model.post,
    })

    if (!user) {
      return response(401, [], "Email or Password is incorrect", res)
    }

    const match = await bcrypt.compare(password, user.password)
    if (match) {
      const { id, username, email } = user.dataValues
      const accessToken = jwt.sign({ id, email, username }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "20s",
      })
      const refreshToken = jwt.sign({ id, email, username }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "1w",
      })
      res
        .cookie("refreshToken", refreshToken, {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: "none",
          secure: true,
        })
        .header("authorization", accessToken)
      await model.User.update(
        { refreshToken },
        {
          where: {
            id,
          },
        }
      )
      return response(200, { user, accessToken }, "Login Successfully", res)
    } else {
      return response(401, [], "Email or Password is incorrect", res)
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}

controller.Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) return res.sendStatus(204)
  try {
    await model.User.findOne({
      where: { refreshToken },
    }).then(async (user) => {
      if (!user) return res.sendStatus(204)
      const { id } = user.dataValues
      await model.User.update({ refreshToken: null }, { where: { id } })
      res.clearCookie("refreshToken")
      return res.sendStatus(200)
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export default controller
