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

module.exports = {
  create
}