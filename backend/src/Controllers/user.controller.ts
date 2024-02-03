import {UsersModel} from "../ApiModels/user.model";
import bcryptjs from "bcryptjs";
import passport from "passport";
import jwt from 'jsonwebtoken'
import NewUserEmail from "../Utils/Email/NewUserEmail";


const salt = bcryptjs.genSaltSync(10);

const users = UsersModel();

export default function UserController() {
    /**
     * @swagger
     * components:
     *   securitySchemes:
     *     bearerAuth:
     *       type: http
     *       scheme: bearer
     *       bearerFormat: JWT
     */
    /**
     * @swagger
     * /user:
     *   get:
     *     summary: Returns a list of users
     *     description: Fetches all the users stored in the database
     *     responses:
     *       200:
     *         description: A JSON array of user objects
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     *       500:
     *         description: Error occurred while fetching all users
     */
    const getAllUsers = async (_req: any, res: any) => {
        try {
            const allUsers = await users.getAllUsers();
            res.json(allUsers);
        } catch (e) {
            res.status(500).send({message: 'Error occurred while fetching all users'});
        }
    };

    /**
     * @swagger
     * /user/{id}:
     *   get:
     *     summary: Fetch a user by ID
     *     description: Fetches a single user from the database using the provided id
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         description: The id of the user to fetch
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: A user object
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     *       500:
     *         description: Error occurred while fetching the user
     */

    const getUserById = async (req: any, res: any) => {
        try {
            const user = await users.getUserById(parseInt(req.params.id));
            if (user) {
                res.json(user);
            } else {
                res.status(404).send({message: 'User not found'});
            }
        } catch (e) {
            res.status(500).send({message: 'Error occurred while fetching the user'});
        }
    };

    /**
     * @swagger
     * /user/register:
     *   post:
     *     summary: Register a new user
     *     description: Creates a new user in the database
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserRegister'
     *     responses:
     *       200:
     *         description: A user object representing the new user
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       500:
     *         description: Error occurred while creating the user
     */

    const register = async (req: any, res: any) => {
        try {
            const result = await users.createUser(req.body.username, req.body.email, bcryptjs.hashSync(req.body.password, salt), true);
            if (result.dataValues.id) {
                await NewUserEmail(result.dataValues.email, result.dataValues.first_name || result.dataValues.username)
            }
            res.json(result);
        } catch (e) {
            res.status(500).send({message: 'Error occurred while creating the user'});
        }
    };

    /**
     * @swagger
     * /user/login:
     *   post:
     *     summary: Log in an existing user
     *     description: Logs in a user and returns a generated JSON Web Token (JWT)
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserLogin'
     *     responses:
     *       200:
     *         description: User object along with the authentication token
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/UserWithToken'
     *       500:
     *         description: Error occurred during authentication
     */

    const login = (req: any, res: any) => {
        if (process.env.JWT_SECRET === undefined) {
            res.status(500).json({
                message: "Internal server error"
            });
            throw new Error("jwt secret is not defined in .env");
        }
        passport.authenticate('local', {session: false}, async (err: any, user: any, info: any) => {
            try {
                if (err || !user) {
                    res.status(400).json({
                        message: info.message,
                        user: user
                    });
                }
                req.login(user, {session: false}, (err: any) => {
                    if (err) {
                        res.status(500).send(err);
                    }
                    const token = jwt.sign(user, process.env.JWT_SECRET!);
                    return res.json({user, token});
                });
            } catch (e) {
                res.status(500).json('Error occurred during authentication');
            }
        })(req, res);
    };

    /**
     * @swagger
     * components:
     *   schemas:
     *     User:
     *       type: object
     *       properties:
     *         username:
     *           type: string
     *         email:
     *           type: string
     *     UserRegister:
     *       type: object
     *       properties:
     *         username:
     *           type: string
     *         email:
     *           type: string
     *         password:
     *           type: string
     *     UserLogin:
     *       type: object
     *       properties:
     *         username:
     *           type: string
     *         password:
     *           type: string
     *     UserWithToken:
     *       type: object
     *       properties:
     *         user:
     *           $ref: '#/components/schemas/User'
     *         token:
     *           type: string
     */

    return {
        getAllUsers,
        getUserById,
        register,
        login
    }
}