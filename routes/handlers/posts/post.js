import model from '../../../models/index.js'
import slugify from 'slugify'

const handler = {}

handler.CreatePost = async (req, res) => {
	const { title, description, content } = req.body
	const slug = slugify(title, { lower: true })
	if (!title || !description || !content)
		return res.status(400).json({
			status: 400,
			error: 'Bad Request',
			message: 'All field must be provided.',
		})
	try {
		const posts = await model.Post.build({
			title,
			slug,
			description,
			content,
		})

		await posts.save()
		return res.status(201).json({
			status: 201,
			query: 'OK',
			message: 'New post has been successfully created.',
			content: posts,
		})
	} catch (error) {
		return res.status(500).json({
			status: 500,
			error: 'Internal Server Error',
			message: error.message,
		})
	}
}

export default handler
