const { Category } = require('../models')

async function create(req, res) {
    try {
       const category = await Category.create(req.body)
       res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ err: error })
    }
}

async function index(req, res) {
    try {
      const categories = await Category.findAll()
      res.json(categories)
    } catch (error) {
      console.log(error)
      res.status(500).json({ err: error })
    }
  }

module.exports = {
    create,
    index
}