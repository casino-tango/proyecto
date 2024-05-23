import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";



export const sequelize = new Sequelize({
  dialect: 'postgres',
  host:'ep-wild-meadow-a4knsmvi-pooler.us-east-1.aws.neon.tech',
  port: 5432, // Utiliza la variable de entorno para el puerto
  database: 'verceldb',
  username:'default',
  password: 'v1cjdnh2ersA',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});


