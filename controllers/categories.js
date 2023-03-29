const { Category } = require('../models')

async function create(req, res) {
    try {
       const category = await Category.create(req.body)
       res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

module.exports = {
    create
}