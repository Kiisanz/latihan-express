import PostController from "./postsController.js";
import createPosts from "./createPost.js";
const controller = {};
controller.post = PostController;
controller.createPost = createPosts;

export default controller;
