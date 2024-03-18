import model from "../models/index.js";
import response from "../api/response.js";

const controller = {};

controller.getAllPosts = async (req, res) => {
  try {
    await model.post.findAll().then((results) => {
      if (results.length > 0) {
        response(200, results, "Get all data from posts table", res);
      } else {
        response(404, [], "Data not found", res);
      }
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

export default controller;
