import Usercontroller from "./user-controller.js"
import loginController from "./login-controller.js"
import register from "./register-controller.js"
const controller = {}
controller.user = Usercontroller
controller.register = register
controller.login = loginController
export default controller