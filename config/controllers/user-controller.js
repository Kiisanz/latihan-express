import model from "../models/index.js"
import response from "../api/response.js"

const controller = {}


controller.getAllUser = async (req, res) => {
  try {
  await model.user.findAll().then((hasil) => {
    if(hasil.length > 0){
      response(200, hasil, "Get all data from users table", res)
    }else{
      response(404, [], "Data not found", res)
    }
  })
} catch (err) {
  res.status(400).json({
    message : err.message
  })
}
}


export default controller