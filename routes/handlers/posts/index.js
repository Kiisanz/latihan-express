import GetData from './get.js'
import PostData from './post.js'

const handler = {}

handler.getPostData = GetData.GetAllPosts
handler.createPost = PostData.CreatePost

export default handler
