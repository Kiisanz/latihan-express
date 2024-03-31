import model from '../../../models/index.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const handler = {}

handler.Login = async (req, res) => {
	const { email, password } = req.body

	if (!email || !password) {
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'All fields must be provided.',
		})
	}
	try {
		const User = await model.User.findOne({ where: { email } })
		if (!User) {
			return res.status(404).json({
				status: 404,
				error: 'Not Found',
				message:
					'User not found. Please verify the email address and try again.',
				content: [],
			})
		}
		const match = bcrypt.compareSync(password, User.password)
		if (match) {
			const { userId, email, username } = User.dataValues
			console.log(username)

			const accessToken = jwt.sign(
				{ userId, email, username },
				process.env.ACCESS_TOKEN_SECRET,
				{
					expiresIn: '20s',
				}
			)

			const refreshToken = jwt.sign(
				{ userId, email, username },
				process.env.REFRESH_TOKEN_SECRET,
				{
					expiresIn: '1w',
				}
			)

			await model.User.update(
				{ refreshToken },
				{
					where: {
						userId,
					},
				}
			)

			return res.status(200).json({
				status: 200,
				message: 'Login Successful, Welcome!',
				content: User,
				refreshToken,
				accessToken,
			})
		}
		return res.status(400).json({
			status: 400,
			message: 'Email or password is invalid.',
		})
	} catch (error) {
		res.status(500).json({
			status: 500,
			error: 'Internal Server Error',
			message: error.message,
		})
	}
}
export default handler
