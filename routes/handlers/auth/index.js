import RegisterHandler from './register.js'
import LoginHandler from './login.js'
import RefreshToken from './refreshToken.js'

const handler = {}

handler.Register = RegisterHandler.Register
handler.Login = LoginHandler.Login
handler.refreshToken = RefreshToken.refreshToken

export default handler
