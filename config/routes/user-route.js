import express from "express"
const router = express.Router()
import controller from "../controllers/index.js"

//router.post("/", controller.user.addUser)
//router.get("/login/:id", controller.login.getUser)
router.get("/users", controller.user.getAllUser)
//router.delete("/delete", controller.user.deleteUser)

export default router