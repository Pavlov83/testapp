require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
var cors = require('cors')



mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(cors())
app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
const invoicesRouter = require('./routes/invoices')
app.use('/subscribers', subscribersRouter)
app.use('/invoices',invoicesRouter)

app.listen(5000, () => console.log('Server Started'))