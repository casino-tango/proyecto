import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";


// * conxion con render*****
//  export const sequelize = new Sequelize({
//   database: 'casino_tango_wva4',
//   username: 'casino_tango_wva4_user',
//   password: 'VS2wZ7OEfSH2ix2OS6CQpyCREdOyZBDi',
//   host: 'dpg-cojb0c6n7f5s73c68ang-a.oregon-postgres.render.com',
//   dialect: 'postgres',
//   dialectOptions: {
//     ssl: true,
//   },
//   logging: false, // Set to true if you want to see SQL queries in logs
// });

//  *******conexion con vercel****

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




// export const sequelize = new Sequelize(
//   process.env.DATABASE_DATABASE,
//   process.env.DATABASE_USERNAME,
//   process.env.DATABASE_PASSWORD,                    
//    {
//     host: process.env.DATABASE_HOST,
//   dialect: 'postgres',
// });


