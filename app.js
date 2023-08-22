require('dotenv').config()
require('./config/DBconfig')

const express = require('express')
const hbs = require('hbs')
const bodyParser = require('body-parser')
const routes = require('./controllers/routes')

let app = express()
const PORT = process.env.PORT

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static('./public'))

app.use(bodyParser.urlencoded({
    extended: true
}))

app.use('/', routes)

app.listen(PORT, () =>{
    console.log(`Server ascolta sulla porta ${PORT}`)
})


