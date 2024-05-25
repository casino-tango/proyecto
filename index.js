// import app from './app.js';
// import  sequelize  from "./src/database/database.js";
// import './src/model/usuariosMODEL.js'
// import './src/model/maquinasMODEL.js'
// import './src/model/ruletasMODEL.js'
// import "./src/model/fotografiasMODEL.js";

// import dotenv from 'dotenv';
// dotenv.config();
// // hola

// const PORT = process.env.PORT || 3001

// async function main() {
//     try {
//         await sequelize.sync({ force: false }) //NO TOCAR O CAMBIAR POR TRUE
//         app.listen(process.env.PORT, () => {
//             console.log(`el puerto esta escuchando http://localhost:${PORT}`);
//         })

//     } catch (error) {
//         console.log("Unable to connect to the database: ", error);
//     }
// }

// main()



import http from 'http';
import httpProxy from 'http-proxy';
import app from './app.js';
import sequelize from "./src/database/database.js";
import './src/model/usuariosMODEL.js';
import './src/model/maquinasMODEL.js';
import './src/model/ruletasMODEL.js';
import "./src/model/fotografiasMODEL.js";
import dotenv from 'dotenv';
dotenv.config();

const proxy = httpProxy.createProxyServer({});

const PORT = process.env.PORT || 3000; // Define el puerto en el que Express escuchará

async function main() {
    try {
        await sequelize.sync({ force: false });

        // Crea un servidor HTTP utilizando Express
        const server = http.createServer(app);

        // Redirige el tráfico al puerto deseado
        server.on('request', (req, res) => {
            proxy.web(req, res, { target: 'https://proyecto-u1b6.onrender.com' });
        });

        // Escucha en el puerto definido
        server.listen(PORT, () => {
            console.log(`El servidor está escuchando en http://localhost:${PORT}`);
        });

    } catch (error) {
        console.log("No se puede conectar a la base de datos: ", error);
    }
}

main();
