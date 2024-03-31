import model from '../../../models/index.js'
import bcrypt from 'bcrypt'

const handler = {}

handler.Register = async (req, res) => {
	const { username, email, password, confPassword } = req.body

	if (!username || !email || !password || !confPassword) {
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'All fields must be provided.',
		})
	}
	if (password.length < 8) {
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Password must be at least 8 character',
		})
	}
	if (confPassword !== password) {
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Password do not match.',
		})
	}

	try {
		const hashedPassword = bcrypt.hashSync(password, 10)

		const [User, isNotExist] = await model.User.findOrBuild({
			where: { email },
			defaults: { username, email, password: hashedPassword },
		})
		if (isNotExist) {
			await User.save()

			return res.status(201).json({
				status: 201,
				message: 'Register succesfull, please login to continue',
				content: User,
			})
		}
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'Email address already registered.',
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
