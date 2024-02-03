import express from "express";
import PostController from "../Controllers/post.controller";
import passport from "../Utils/passport";

const router = express.Router();
const controller = PostController()


export function PostRouter() {
    /**
     * @swagger
     * components:
     *   schemas:
     *     Post:
     *       type: object
     *       properties:
     *         id:
     *           type: integer
     *         title:
     *           type: string
     *         content:
     *           type: string
     *         createdAt:
     *           type: string
     *           format: date-time
     *         updatedAt:
     *           type: string
     *           format: date-time
     *         authorId:
     *           type: integer
     *         status:
     *           type: string
     *           enum: [published, draft, secret]
     *       required:
     *         - title
     *         - content
     *         - authorId
     *         - status
     */

    router.get("/", controller.getAllPosts)
        .get("/:id", controller.getPostById)
        .post("/", passport.authenticate('jwt', {session: false}), controller.addPost)
        .put("/", passport.authenticate('jwt', {session: false}), controller.updatePost)

    return router
}