// DEPENDENCIES
const express = require ('express')
const morgan = require('morgan')
const path = require('path')

require('dotenv').config()
require('./config/database')

const icecreamRoutes = require('./routes/icecream')

const PORT = process.env.PORT

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// MOUNT MIDDLEWARE
app.use(morgan('dev')) // request logger
app.use(express.json()) // parse incoming requests as JSON object
app.use(express.urlencoded({extended: false})) // parse strings & arrays

// ROUTES
app.use('/api', function(req, res){
    res.send('API DOCUMENTATION')
})

app.use('/icecream', icecreamRoutes)

// DATABASE CONNECTION
app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`)
})


