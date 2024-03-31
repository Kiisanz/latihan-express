import model from '../models/index.js'
import jwt from 'jsonwebtoken'
const controller = {}
controller.refreshToken = async (req, res) => {
	try {
		const refreshToken = req.headers['authorization']
		!refreshToken
			? res.sendStatus(401)
			: await model.User.findAll({ where: { refreshToken } }).then((user) => {
					const { id, username, email } = user
					!user
						? res.sendStatus(403)
						: jwt.verify(
								refreshToken,
								process.env.REFRESH_TOKEN_SECRET,
								(err, decoded) => {
									if (err) res.sendStatus(403)
									const accessToken = jwt.sign(
										{ id, email, username },
										process.env.ACCESS_TOKEN_SECRET,
										{
											expiresIn: '20s',
										}
									)
									res.json({ accessToken })
								}
						  )
			  })
	} catch (error) {
		return res.status(500).json({
			message: error.message,
		})
	}
}

export default controller
