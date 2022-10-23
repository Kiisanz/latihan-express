import model from "../models/index.js"
import response from "../api/response.js"

const controller = {}

controller.login = async (req, res) => {
  try {
    await model.user.findAll({
      where : {
        id : req.params.id,
      },
        attributes : ["nickname"], })
        .then((result) => {
          if(result.length > 0){
            response(200, getUser, "Get user", res)
          }else{
            response(404, [], "Data not found", res)
          }
        })
  } catch (err) {
    res.status(500).json({
      message : err.message
    })
  }
}

export default controller