const PostRepository = require("../repositories/PostRepository");

const getAllPosts = async (req, res, next) => {
    const posts = await PostRepository.getAllPosts();
    return res.status(200).res(send)

}


module.export = { getAllPosts };