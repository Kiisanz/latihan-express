import { DataTypes, Model } from 'sequelize'
import sequelize from '../database/db.js'

class User extends Model {}

User.init(
	{
		userId: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1, 99999],
			},
		},
		refreshToken: {
			type: DataTypes.TEXT,
			allowNull: true,
		},
	},
	{ freezeTableName: false, sequelize, modelName: 'User' }
)

export default User
