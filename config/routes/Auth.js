import express from "express"
const router = express.Router()
import controller from "../controllers/index.js"
import auth from "../middleware/auth.js"

router.post("/register", controller.User.Register)
router.post("/login", controller.User.Login)
router.get("/token", controller.RefreshToken.refreshToken)
router.delete("/logout", controller.User.Logout)

export default router
