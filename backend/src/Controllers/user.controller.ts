import {usersModel} from "../ApiModels/user.model";

const users = usersModel();

export default function UserController() {
    /**
     * @swagger
     * /user/:
     *   get:
     *     summary: Returns all users
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: List all users
     */
    const getAllUsers = async (_req: any, res: any) => {
        res.json(await users.getAllUsers());
    };

    /**
     * @swagger
     * /user/{id}:
     *   get:
     *     summary: Returns a user by ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: integer
     *         required: true
     *         description: User id
     *     responses:
     *       200:
     *         description: Returns the user
     *       404:
     *         description: User not found
     */
    const getUserByUsername = async (req: any, res: any) => {
        res.json(await users.getUserByUsername(req.params.id));
    };

    return {
        getAllUsers,
        getUserByUsername
    }
}