require('dotenv').config()
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const formData = require('express-form-data')

const profilesRouter = require('./routes/profiles.js')
const authRouter = require('./routes/auth.js')
const postsRouter = require('./routes/posts.js')
const categoriesRouter = require('./routes/categories.js')
const paymentsRouter = require('./routes/payments.js')
const eventsRouter = require('./routes/events.js')
const expensesRouter = require('./routes/expenses.js')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(formData.parse())

app.use('/api/profiles', profilesRouter)
app.use('/api/auth', authRouter)
app.use('/api/posts', postsRouter)
app.use('/api/categories', categoriesRouter)
app.use('/api/payments', paymentsRouter)
app.use('/api/events', eventsRouter)
app.use('/api/expenses', expensesRouter)

app.use(function (req, res, next) {
  res.status(404).json({ err: 'Not found' })
})

app.use(function (err, req, res, next) {
  res.status(err.status || 500).json({ err: err.message })
})

module.exports = app
