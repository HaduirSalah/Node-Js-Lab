const express = require('express')
const app = express()

const indexRoutes = require('./routes/index_routes')
const clientRoutes = require('./routes/client_routes')
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/muber', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use(express.json())

indexRoutes(app)
clientRoutes(app)

app.use((err, req, res, next)=>{
  res.status(422).send({error: err.message})
})
module.exports = app;