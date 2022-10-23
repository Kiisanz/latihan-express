import model from "../models/index.js"

const controller = {}

controller.newUser = async (req, res) => {
  try {
    let nickname = req.body.nickname
    if(nickname != null){
     await model.user.create({
       nickname, 
       pin : Math.floor(1234 + Math.random() * 1234),
       id : Math.floor(1234567890 + Math.random() * 123456789)
     })
     return res.status(201).json({
      message : "Register berhasil"
    })
    }else{
      res.status(400).json({
        message : "Nickname tidak boleh kosong"
      })
    }
  } catch (err) {
    res.status(500).json({
      message : err.message
    })
  }
}

controller.homepage = (req, res) => {
  res.render("./home.ejs", {
    layout : "./layouts/main.ejs"
  })
}

export default controller