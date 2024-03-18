import db from "../db/db.js";
import { DataTypes } from "sequelize";

const posts = db.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    slug: DataTypes.STRING,
    author: DataTypes.STRING,
    desc: DataTypes.TEXT,
    content: DataTypes.TEXT,
    url_img: DataTypes.STRING,
    category: DataTypes.STRING,
    likes: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
  },

  {
    freezeTableName: true,
    timestamps: false,
  }
);

export default posts;
