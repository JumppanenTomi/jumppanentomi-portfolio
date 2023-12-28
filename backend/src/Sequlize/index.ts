import {Dialect, Sequelize} from "sequelize";
import dotenv from 'dotenv';
import {applyExtraSetup} from "./extra-setup";
import userModel from "./Models/user.model";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME!.toString() || '',
    process.env.DB_USER!.toString() || '',
    process.env.DB_PASSWORD!.toString() || '',
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: (process.env.DB_DIALECT as Dialect) || 'postgres'
    }
);

const modelDefiners = [
    userModel,
];

for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

applyExtraSetup(sequelize);