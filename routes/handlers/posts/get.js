import model from '../../../models/index.js'

const handler = {}

handler.GetAllPosts = async (req, res) => {
	try {
		const posts = await model.Post.findAll()
		if (posts.length > 0) {
			return res.status(200).json({
				status: 200,
				query: 'OK',
				message: 'Get all posts data',
				content: posts,
			})
		} else {
			return res.status(404).json({
				status: 404,
				error: 'Not Found',
				message: 'No posts found.',
			})
		}
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error: 'Internal Server Error',
			message: error.message,
		})
	}
}

export default handler
