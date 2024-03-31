import { DataTypes } from "sequelize"
import db from "../db/db.js"

const users = db.define(
  "users",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email address",
        },
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
      validate: {
        notEmpty: {
          args: true,
          msg: "Enter a combination of at least eight numbers, letters and punctuation markslong.",
        },
        min: 8,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    refreshToken: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

export default users
