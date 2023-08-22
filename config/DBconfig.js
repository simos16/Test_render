require('dotenv').config()
const mongoose = require('mongoose')

const {MONGO_URI} = process.env

mongoose.set('strictQuery', true)

mongoose.connect(MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

require('../models/nota')