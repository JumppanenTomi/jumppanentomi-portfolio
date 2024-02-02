import {sequelize} from "../Sequlize";

export const postModel = () => {
    const getAllPosts = async () => {
        try {
            return await sequelize.models.post.findAll({
                attributes: ['id', 'title', 'authorId']
            })
        } catch (e: any) {
            throw new Error(`Failed to get all posts: ${e.message}`);
        }
    }
    const getPostById = async (id: number) => {
        try {
            const post = await sequelize.models.post.findByPk(id);
            if (!post) {
                throw new Error(`Post with id ${id} not found`);
            }
            return post;
        } catch (e: any) {
            throw new Error(`Failed to get post by id: ${e.message}`);
        }
    }
    const addPost = async (title: string, content: string, authorId: number, status: string) => {
        try {
            return await sequelize.models.post.create({title, content, authorId, status});
        } catch (e: any) {
            throw new Error(`Failed to add post: ${e.message}`);
        }
    }
    const updatePost = async (id: number, title: string, content: string, authorId: number, status: string) => {
        try {
            const post: any = await sequelize.models.post.findByPk(id);

            if (!post) {
                throw new Error(`Post with id ${id} not found`);
            }

            post.title = title;
            post.content = content;
            post.authorId = authorId;
            post.status = status;
            return await post.save();

        } catch (e: any) {
            throw new Error(`Failed to update post: ${e.message}`);
        }
    }
    return {
        getAllPosts,
        getPostById,
        addPost,
        updatePost
    };
}