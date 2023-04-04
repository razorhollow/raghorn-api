const { Event } = require('../models')

const create = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

module.exports = {
  create
}