const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv/config')
// const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/error-handler')

app.use(cors())
app.options('*', cors())

//middleware
app.use(express.json())
app.use(morgan('tiny'))
// app.use(authJwt())
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))
app.use(errorHandler)

//Routes

// const api = process.env.API_URL
const api = 'api'

//Database
mongoose
  // .connect(process.env.CONNECTION_STRING,

  .connect(
    'mongodb+srv://akey9009:akey9009@cluster0.qjeeoad.mongodb.net/?retryWrites=true&w=majority',

    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'eshop-database',
    }
  )
  .then(() => {
    console.log('Database Connection is ready...')
  })
  .catch((err) => {
    console.log(err)
  })

//Server
app.listen(8000, function (err) {
  if (err) console.log('Error in server setup')
  console.log('Server listening on Port', 8000)
})
