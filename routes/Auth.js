import express from 'express'
const router = express.Router()
import authHandler from './handlers/auth/index.js'
import cookieParser from 'cookie-parser'

router.post('/register', authHandler.Register)
router.post('/login', authHandler.Login)
router.get('/token', authHandler.refreshToken)

export default router
