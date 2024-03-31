import PostModel from "./PostModel.js"
import UserModel from "./UserModel.js"

const model = {}
model.Post = PostModel
model.User = UserModel

model.User.hasMany(model.Post, {
  foreignKey: "userId",
})
model.Post.belongsTo(model.User)

export default model
