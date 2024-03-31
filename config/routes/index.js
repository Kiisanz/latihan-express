import express from "express"
const router = express.Router()
import controller from "../controllers/index.js"
import auth from "../middleware/auth.js"

router.get("/", auth, controller.Post.getAllPosts)

export default router
