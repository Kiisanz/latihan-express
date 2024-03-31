import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
	const authHeader = req.headers['authorization']
	if (!authHeader) {
		return res.status(401).json({
			status: 401,
			error: 'Unauthorized',
			message: 'Token is missing',
		})
	}
	const accessToken = authHeader.split(' ')[1]

	if (accessToken == null) {
		return res.status(401).json({
			status: 401,
			error: 'Unauthorized',
			message: 'Token is invalid',
		})
	}
	jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403)
		req.email = decoded.email
		next()
	})
}
export default verifyToken
