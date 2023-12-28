import {CreationOptional, Model, DataTypes, InferAttributes, InferCreationAttributes, Sequelize} from "sequelize";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  id: CreationOptional<number>;
  username: string;
}

const UserModel = (sequelize: Sequelize) => {
	sequelize.define<UserModel>('user', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				is: /^\w{3,}$/
			}
		},
	});
};

export default UserModel