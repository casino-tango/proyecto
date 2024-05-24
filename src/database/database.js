// En ../database/database.js
import pg from 'pg'
import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize(process.env.POSTGRES_URL);

export default sequelize;
