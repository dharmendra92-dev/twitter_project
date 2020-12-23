require('dotenv').config()
var express = require('express')
var allRoutes = require('./api/twitter.routes')

var app = express()
app.use(express.json())

//configure the routes
app.use('/api/twitter', allRoutes)


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server listening on port: " + process.env.APP_PORT);
})

