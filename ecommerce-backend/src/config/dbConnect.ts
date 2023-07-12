import { Sequelize } from "sequelize";
import * as pg from 'pg'
import dotenv from "dotenv";

dotenv.config();

const dbName = process.env.DB_NAME as string;
const dbHost = process.env.DB_HOST;
const dbUsername = process.env.DB_USERNAME as string;
const dbPassword = process.env.DB_PASSWORD;
const dbDialect = "postgres";

const sequelizeConnection = new Sequelize(dbName, dbUsername, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
  dialectModule: pg
});

export default sequelizeConnection;