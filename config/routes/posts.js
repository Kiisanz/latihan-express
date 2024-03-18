import express from "express";
const router = express.Router();
import controller from "../controllers/index.js";

router.post("/post/add", controller.createPost.createPost);
router.get("/posts", controller.post.getAllPosts);

export default router;
