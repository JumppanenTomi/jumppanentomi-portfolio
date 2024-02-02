import express from "express";
import UserController from "../Controllers/user.controller";

const router = express.Router();
const controller = UserController()


export function UserRouter() {
    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *         username:
     *           type: string
     *         email:
     *           type: string
     *         password:
     *           type: string
     *         firstName:
     *           type: string
     *         lastName:
     *           type: string
     *         role:
     *           type: string
     *         isActive:
     *           type: boolean
     *         createdAt:
     *           type: string
     *           format: date-time
     *         updatedAt:
     *           type: string
     *           format: date-time
     *         lastLogin:
     *           type: string
     *           format: date-time
     *         avatarUrl:
     *           type: string
     *       required:
     *         - username
     *         - email
     *         - password
     *         - firstName
     *         - lastName
     *         - role
     *         - isActive
     */

    router.get("/", controller.getAllUsers)
        .get("/:id", controller.getUserById)
        .post('/register', controller.register)
        .post('/login', controller.login)

    return router
}