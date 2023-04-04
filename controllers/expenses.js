const { Expense } = require('../models')

const create = async(req, res) => {
  try {
    const expense = await Expense.create(req.body)
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

const deleteExpense = async(req, res) => {
  try {
    const rowsRemoved = await Expense.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(rowsRemoved)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

const update = async (req, res) => {
  try {
    const expense = await Expense.update(
      req.body,
      { where: { id: req.params.id },
    returning: true }
    )
    res.status(200).json(expense)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

const index = async (req, res) => {
  try {
      const expenses = await Expense.findAll()
      res.status(200).json(expenses)
  } catch (error) {
      res.status(500).json(error)
  }
}

module.exports = {
  create,
  delete: deleteExpense,
  update,
  index
}

