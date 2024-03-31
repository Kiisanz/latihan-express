import jwt from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
	const authHeader = req.headers.authorization
	const token = authHeader.split(' ').pop()
	if (token == null) {
		return res.status(401).json({
			status: 401,
			error: 'Unauthorized',
			message: 'Token is invalid',
		})
	}
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
		if (err) return res.sendStatus(403)
		req.email = decoded.email
		next()
	})
}
export default verifyToken
