import express from 'express';
import cors from "cors";
import {UserRouter} from "./Routes/user.route";
import {sequelize} from "./Sequlize";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {swaggerOptions} from "./swaggerOptions";
import path from "node:path";

const app = express();
const port = 3000;

const connectToDatabase = async () => {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate();
        console.log('Database connection OK!');
    } catch (error: any) {
        console.error('Unable to connect to the database: ' + error);
        process.exit(1);
    }
}

const init = async () => {
    await connectToDatabase()
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions), {explorer: true}));
    app.use('/docs/jsdoc', express.static(path.join(__dirname, 'docs')));

    app.use('/user', UserRouter())

    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
}

init()

