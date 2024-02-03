import {sequelize} from "../Sequlize";

export const UsersModel = () => {
    const getAllUsers = async () => {
        try {
            return await sequelize.models.user.findAll({
                attributes: ['username', 'email']
            })
        } catch (e: any) {
            console.error(new Error(`Failed to get all users: ${e}`))
            throw e;
        }
    }
    const getUserById = async (id: number) => {
        try {
            return await sequelize.models.user.findByPk(id)
        } catch (e: any) {
            console.error(new Error(`Failed to get user by id ${id}: ${e}`))
            throw e;
        }
    }
    const getUserLogin = async (username: string) => {
        try {
            return await sequelize.models.user.findOne({
                where: {
                    username: username,
                },
            });
        } catch (e: any) {
            console.error(new Error(`Failed to get user by username ${username}: ${e}`));
            throw e;
        }
    }
    const createUser = async (username: string, email: string, password: string, isActive: boolean,) => {
        try {
            return await sequelize.models.user.create({username, email, password, isActive})
        } catch (e: any) {
            console.error(new Error(`Failed to create user with email ${email}: ${e}`));
            throw e;
        }
    }
    return {
        getAllUsers,
        getUserById,
        getUserLogin,
        createUser
    }
}