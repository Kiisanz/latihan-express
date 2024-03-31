import express from 'express'
const router = express.Router()
import postsHandler from './handlers/posts/index.js'

router.get('/posts', postsHandler.getPostData)
router.post('/post/new', postsHandler.createPost)

export default router
