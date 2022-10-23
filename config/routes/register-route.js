import express from "express"
const router = express.Router()
import controller from "../controllers/index.js"

router.post("/register", controller.register.newUser)
router.get("/home", controller.register.homepage)

export default router
