const { Expense } = require('../models')

const create = async(req, res) => {
  try {
    const expense = await Expense.create(req.body)
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create
}

