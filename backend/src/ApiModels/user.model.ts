import {sequelize} from "../Sequlize";

export const usersModel = () => {
    const getAllUsers = async () => {
        try {
            return await sequelize.models.user.findAll()
        } catch (e: any) {
            console.log("error: " + e)
        }
    }

    const getUserByUsername = async (id: number) => {
        try {
            return await sequelize.models.user.findByPk(id)
        } catch (e: any) {
            console.log("error: " + e)
        }
    }

    return {
        getAllUsers,
        getUserByUsername
    }
}