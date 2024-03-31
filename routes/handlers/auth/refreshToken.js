import model from '../../../models/index.js'
import jwt from 'jsonwebtoken'
const handler = {}

handler.refreshToken = async (req, res) => {
	try {
		const authHeader = req.headers['authorization']
		if (!authHeader) {
			return res.status(401).json({
				status: 401,
				error: 'Unauthorized',
				message: 'Token is missing',
			})
		}
		if (!authHeader) console.log('error bang')
		const refreshToken = authHeader.split(' ')[1]

		if (refreshToken == null) {
			return res.status(401).json({
				status: 401,
				error: 'Unauthorized',
				message: 'Token is invalid',
			})
		}

		const user = await model.User.findOne({ where: { refreshToken } })
		const { userId, username, email } = user

		if (!user) return res.sendStatus(403)

		jwt.verify(
			refreshToken,
			process.env.REFRESH_TOKEN_SECRET,
			(err, decoded) => {
				if (err) return res.sendStatus(403)

				const accessToken = jwt.sign(
					{ userId, email, username },
					process.env.ACCESS_TOKEN_SECRET,
					{
						expiresIn: '20s',
					}
				)
				res.json({ accessToken })
			}
		)
	} catch (error) {
		return res.status(500).json({
			message: 'error bang',
		})
	}
}

export default handler
