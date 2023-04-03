const { Payment } = require('../models')

const create = async(req, res) => {
  try {
    const payment = await Payment.create(req.body)
    res.status(200).json(payment)
  } catch (error) {
    console.log(error)
    res.status(500).json({ err: error })
  }
}

const deletePayment = async(req, res) => {
  try {
    const rowsRemoved = await Payment.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(rowsRemoved)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

const update = async (req, res) => {
  try {
    const payment = await Payment.update(
      req.body,
      { where: { id: req.params.id },
    returning: true }
    )
    res.status(200).json(payment)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

module.exports = {
  create,
  delete: deletePayment,
  update
}