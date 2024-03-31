//import library
import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
dotenv.config()
import AuthRoutes from './routes/Auth.js'
import cors from 'cors'
import multiparty from 'connect-multiparty'
import cookieParser from 'cookie-parser'
import PostRoutes from './routes/Posts.js'
import verifyToken from './middlewares/VerifyToken.js'
const app = express()
const port = process.env.APP_PORT
const url = process.env.APP_URL
const MultipartyMiddleware = multiparty({ uploadDir: './images' })
//set body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(
	cors({
		origin: 'http://localhost:5173',
		credentials: true,
	})
)

app.use('/auth', AuthRoutes)
app.use('/', verifyToken, PostRoutes)
app.post('/upload', MultipartyMiddleware, (req, res) => {
	console.log(req.files.upload)
})

app.listen(port, () => {
	console.log(`Server up and running at ${url}:${port}`)
})
