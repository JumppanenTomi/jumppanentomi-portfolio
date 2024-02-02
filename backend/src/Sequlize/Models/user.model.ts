import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from "sequelize";

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
	id: CreationOptional<number>;
	username: string;
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	role: string;
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
	lastLogin: Date;
	avatarUrl: string;
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
		email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			allowNull: false,
			type: DataTypes.STRING
		},
		firstName: {
			allowNull: true,
			type: DataTypes.STRING
		},
		lastName: {
			allowNull: true,
			type: DataTypes.STRING
		},
		createdAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		updatedAt: {
			allowNull: false,
			type: DataTypes.DATE
		},
		role: {
			allowNull: true,
			type: DataTypes.STRING
		},
		isActive: {
			allowNull: false,
			defaultValue: true,
			type: DataTypes.BOOLEAN
		},
		lastLogin: {
			allowNull: true,
			type: DataTypes.DATE
		},
		avatarUrl: {
			allowNull: true,
			type: DataTypes.STRING
		}
	});
};

export default UserModel