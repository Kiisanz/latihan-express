import db from "../db/db.js"
import { Sequelize, DataTypes } from "sequelize"

const user = db.define(
  "users", {
    id: {
      type : DataTypes.INTEGER,
      primaryKey : true
    },
    nickname : {
      type :DataTypes.STRING,
      //allowNull : false
    },
    pin : DataTypes.INTEGER,
  },
    {
    freezeTableName : true,
    timestamps : false
    }
 
)

export default user