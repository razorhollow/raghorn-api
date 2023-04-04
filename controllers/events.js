const { Event } = require('../models')

const create = async (req, res) => {
  try {
    const event = await Event.create(req.body)
    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({ err: error })
  }
}

const deleteEvent = async(req, res) => {
  try {
    const rowsRemoved = await Event.destroy(
      { where: { id: req.params.id } }
    )
    res.status(200).json(rowsRemoved)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

const update = async (req, res) => {
  try {
    const event = await Event.update(
      req.body,
      { where: { id: req.params.id },
    returning: true }
    )
    res.status(200).json(event)
  } catch (error) {
    res.status(500).json({err: error })
  }
}

module.exports = {
  create,
  delete: deleteEvent,
  update
}