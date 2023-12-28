import express from "express";
import UserController from "../Controllers/user.controller";

const router = express.Router();
const user = UserController()


export function UserRouter() {
    router.get("/", user.getAllUsers);
    router.get("/:id", user.getUserByUsername);

    return router
}