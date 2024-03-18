import model from "../models/index.js";

const controller = {};

controller.createPost = async (req, res) => {
  try {
    let title = req.body.title;
    let content = req.body.content;
    let author = req.body.author;
    let desc = req.body.desc;
    let slug = req.body.slug;
    let url_img = req.body.url_img;
    let category = req.body.category;
    if (title && content && desc != null) {
      await model.post.create({
        id: Math.floor(1234567890 + Math.random() * 123456789),
        title,
        content,
        author,
        desc,
        slug,
        url_img,
        category,
        likes: 0,
      });
      return res.status(201).json({
        message: "Create Post Successfully",
      });
    } else {
      res.status(400).json({
        message: "All field must be filled",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export default controller;
