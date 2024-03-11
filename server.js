// DEPENDENCIES
const express = require ('express')
const morgan = require('morgan')

require('dotenv').config()
require('./config/database')

const PORT = process.env.PORT

const app = express()

// MOUNT MIDDLEWARE
app.use(morgan('dev')) // request logger
app.use(express.json()) // parse incoming requests as JSON object
app.use(express.urlencoded({extended: false})) // parse strings & arrays

// ROUTES
app.use('/api', function(req, res){
    res.send('API DOCUMENTATION')
})

// DATABASE CONNECTION
app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`)
})


