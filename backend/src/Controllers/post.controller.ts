import {postModel} from "../ApiModels/post.model";

const post = postModel();

export default function PostController() {
    /**
     * @swagger
     * /post:
     *   get:
     *     summary: Retrieve all posts
     *     tags: [Post]
     *     responses:
     *       200:
     *         description: Array of posts
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Post'
     */
    const getAllPosts = async (_req: any, res: any) => {
        try {
            const posts = await post.getAllPosts();
            res.json(posts);
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    };

    /**
     * @swagger
     * /post/{id}:
     *   get:
     *     summary: Retrieve a post by its id
     *     tags: [Post]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The post id
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: Single post
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     */

    const getPostById = async (req: any, res: any) => {
        try {
            const postById = await post.getPostById(parseInt(req.params.id));
            if (!postById) res.status(404).json({message: `Post with id ${req.params.id} not found.`});
            else res.json(postById);
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    };

    /**
     * @swagger
     * /post:
     *   post:
     *     summary: Add a new post
     *     tags: [Post]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               title:
     *                 type: string
     *               content:
     *                 type: string
     *               status:
     *                 type: string
     *             required:
     *               - title
     *               - content
     *               - status
     *     responses:
     *       200:
     *         description: The post was successfully created
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     */
    const addPost = async (req: any, res: any) => {
        //FIXME: vaihd authoid niin että backend etsii sen tokenin perusteella
        try {
            const newPost = await post.addPost(req.body.title, req.body.content, 1, req.body.status);
            res.status(201).json(newPost);
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    }

    /**
     * @swagger
     * /post:
     *   put:
     *     summary: Update a post
     *     tags: [Post]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               id:
     *                 type: integer
     *               title:
     *                 type: string
     *               content:
     *                 type: string
     *               status:
     *                 type: string
     *             required:
     *               - id
     *               - title
     *               - content
     *               - status
     *     responses:
     *       200:
     *         description: The post was successfully updated
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Post'
     */
    const updatePost = async (req: any, res: any) => {
        //FIXME: vaihd authoid niin että backend etsii sen tokenin perusteella
        try {
            const updatedPost = await post.updatePost(req.body.id, req.body.title, req.body.content, 1, req.body.status);
            if (updatedPost[1] === 0) res.status(404).json({message: `Post with id ${req.body.id} not found.`});
            else res.json(updatedPost);
        } catch (error: any) {
            res.status(500).json({message: error.message});
        }
    }

    return {
        getAllPosts,
        getPostById,
        addPost,
        updatePost
    }
}