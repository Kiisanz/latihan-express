import User from './User.js'
import Post from './Post.js'

const model = {}

model.User = User
model.Post = Post

//model.User.hasMany(model.Post, {
//	foreignKey: 'userId',
//})
//model.Post.belongsTo(model.User)

export default model
