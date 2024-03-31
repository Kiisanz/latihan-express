import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/db/db.js'

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		slug: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		//userId: {
		//	type: DataTypes.INTEGER,
		//	allowNull: true,
		//},
	},
	{
		freezeTableName: false,
		sequelize,
		modelName: 'Post',
	}
)

export default Post
