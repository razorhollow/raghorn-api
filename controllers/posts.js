const { Post, Category, Profile, Comment } = require('../models')

const addPost = async (req, res) => {
    try {
       req.body.profileId = req.user.profile.id
       const post = await Post.create(req.body)
       res.status(200).json(post) 
    } catch (error) {
        res.status(500).json(error)
    }
}

const deletePost = async (req, res) => {
    try {
        const rowsRemoved = await Post.destroy(
            { where: { id: req.params.id } }
        )
        res.status(200).json(rowsRemoved)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

const update = async(req, res) => {
    try {
        req.body.profileId = req.user.profile.id
        const post = await Post.update(
            req.body,
            { where: { id: req.params.id }, returning: true }
        ) 
        res.status(200).json(post)
    } catch (error) {
        res.status(500).json(error)
    }
}

const index = async (req, res) => {
    try {
        const posts = await Post.findAll({
            include: [
                {
                    model: Profile,
                    as: 'profile',
                },
                {
                    model: Comment,
                    as: 'comments',
                    include: [
                        {
                            model: Profile,
                            as: 'profile'
                        },
                    ],
                },
            ],
        })
        
        res.status(200).json(posts)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

module.exports = { addPost, delete: deletePost, update, index }