import {CreationOptional, DataTypes, InferAttributes, InferCreationAttributes, Model, Sequelize} from "sequelize";

interface PostModel extends Model<InferAttributes<PostModel>, InferCreationAttributes<PostModel>> {
    id: CreationOptional<number>;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorId: number;
    status: 'published' | 'draft' | 'secret';
}

const PostModel = (sequelize: Sequelize) => {
    sequelize.define<PostModel>('post', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: {
            allowNull: false,
            type: DataTypes.STRING
        },
        content: {
            allowNull: false,
            type: DataTypes.TEXT
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        authorId: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        status: {
            allowNull: false,
            type: DataTypes.ENUM('published', 'draft', 'secret'),
            defaultValue: 'draft'
        }
    });
};

export default PostModel;