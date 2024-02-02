import {UsersModel} from "../ApiModels/user.model";
import bcryptjs from "bcryptjs";
import passport from "passport";
import jwt from 'jsonwebtoken'


const salt = bcryptjs.genSaltSync(10);

const users = UsersModel();

export default function UserController() {
    /**
     * @openapi
     * /user:
     *   get:
     *     summary: Returns a list of users
     *     responses:
     *       200:
     *         description: A JSON array of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   username:
     *                     type: string
     *                   email:
     *                     type: string
     */
    const getAllUsers = async (_req: any, res: any) => {
        res.json(await users.getAllUsers());
    };

    /**
     * @openapi
     * /user/{id}:
     *   get:
     *     summary: Get a user by ID
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *     responses:
     *       200:
     *         description: A user object
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 username:
     *                   type: string
     *                 email:
     *                   type: string
     */

    const getUserById = async (req: any, res: any) => {
        res.json(await users.getUserById(parseInt(req.params.id)));
    };

    /**
     * @openapi
     * /user/register:
     *   post:
     *     summary: Register a new user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *               email:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         description: A user object
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 username:
     *                   type: string
     *                 email:
     *                   type: string
     */
    const register = async (req: any, res: any) => {
        const result = await users.createUser(req.body.username, req.body.email, bcryptjs.hashSync(String(req.body.password), salt), true)
        res.json(result)
    };

    /**
     * @openapi
     * /user/login:
     *   post:
     *     summary: Log in an existing user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *               password:
     *                 type: string
     *     responses:
     *       200:
     *         description: A user object along with the authentication token
     *         content:
     *           application/json:
     *             schema:
     *               type: object
     *               properties:
     *                 user:
     *                   type: object
     *                   properties:
     *                     username:
     *                       type: string
     *                     email:
     *                       type: string
     *                 token:
     *                   type: string
     *       400:
     *         description: Request fails due to some error or the user does not exist
     */
    const login = (req: any, res: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        passport.authenticate('local', {session: false}, (err: any, user: any, info: any) => {
            console.log(info)
            if (err || !user) {
                console.log(err);
                return res.status(400).json({
                    message: 'Something is not right',
                    user: user
                });
            }
            req.login(user, {session: false}, (err: any) => {
                if (err) {
                    res.send(err);
                }
                const token = jwt.sign(user, "52EB177C861A3ABAB882DC7546C85");
                return res.json({user, token});
            });
        })(req, res);
    };


    return {
        getAllUsers,
        getUserById,
        register,
        login
    }
}