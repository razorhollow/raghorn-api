const { Post, Category } = require('../models')

const addPost = async (req, res) => {
    try {
       req.body.profileId = req.user.profile.id
       const post = await Post.create(req.body)
       res.status(200).json(post) 
    } catch (error) {
        res.status(500).json(error)
    }
}

module.exports = { addPost }