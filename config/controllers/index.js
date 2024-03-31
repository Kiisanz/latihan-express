import UserController from "./UserController.js"
import PostController from "./PostController.js"
import RefreshToken from "./RefreshToken.js"

const controller = {}
controller.User = UserController
controller.Post = PostController
controller.RefreshToken = RefreshToken

export default controller
