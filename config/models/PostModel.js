import db from "../db/db.js";
import { DataTypes } from "sequelize";

const posts = db.define(
  "posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    desc: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    url_img: {
      type: DataTypes.STRING,
      isUrl: true,
    },
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
