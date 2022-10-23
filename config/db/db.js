import Sequelize from "sequelize"
import dotenv from "dotenv"
dotenv.config()

let connect = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect : process.env.DB,
  host : process.env.DB_HOST
}
)

export default connect