import response from "../api/response.js"
import model from "../models/index.js"

const controller = {}

controller.getAllPosts = async (req, res) => {
  try {
    const posts = await model.Post.findAll()
    if (posts.length > 0) {
      return response(200, posts, "Get All Posts Data", res)
    } else {
      return response(404, [], "Data Not Found", res)
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

export default controller
