import express from 'express';
import cors from "cors";
import {UserRouter} from "./Routes/user.route";
import {sequelize} from "./Sequlize";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import {swaggerOptions} from "./swaggerOptions";
import path from "node:path";
import dotenv from "dotenv";
import {PostRouter} from "./Routes/post.route";
import passport from "passport";
import session from "express-session";
import loggingEnabled from "./Utils/LoggingEnabled";

dotenv.config();
const app = express();

const handleDatabaseError = (error: any, retryFunction: () => Promise<void>) => {
    console.error('Database related error: ' + error);
    console.error('Retrying operation in 10 seconds...');
    setTimeout(retryFunction, 10000); // wait 10 seconds before retry
}

const connectToDatabase = async () => {
    console.log(`Checking database connection...`);
    try {
        await sequelize.authenticate({logging: loggingEnabled()});
        console.log('Database connection OK!');
        await syncDatabase();
    } catch (error: any) {
        handleDatabaseError(error, connectToDatabase);
    }
}

const syncDatabase = async () => {
    try {
        await sequelize.sync({alter: true, logging: loggingEnabled()});
        console.log('Database sync OK!');
    } catch (error: any) {
        handleDatabaseError(error, syncDatabase);
    }
}

const serverSetup = () => {
    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))
    if (!process.env.SECRET) {
        throw new Error("JWT secret is not defined in .env")
    }
    app.use(session({
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use("/docs/swagger", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions), {explorer: true}));
    app.use('/docs/jsdoc', express.static(path.join(__dirname, 'docs')));
}

const routerSetup = () => {
    app.use('/user', UserRouter())
    app.use('/post', PostRouter())
}

const init = async () => {
    await connectToDatabase();
    serverSetup();
    routerSetup();
    app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port ${process.env.SERVER_PORT}!`));
}

init()