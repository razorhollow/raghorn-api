const { Comment, Post } = require('../models')

async function createComment(req, res) {
    try {
        req.body.profileId = req.user.profile.id 
        req.body.postId = req.params.id  
        const comment = await Comment.create(req.body) 
        res.status(200).json(comment)  
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

const deleteComment = async (req, res) => {
    try {
        const rowsRemoved = await Post.destroy(
            { where: { id: req.params.commentId } }
        )
        res.status(200).json(rowsRemoved)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}


module.exports = {
    createComment,
    delete: deleteComment
}