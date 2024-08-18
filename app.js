require("dotenv").config({path: "./.env"});
const express = require('express')

const app = express()

//logger
const logger = require("morgan")
app.use(logger("tiny"))

//routes
app.get('/', require('./routes/indexRoutes')
)

// Error handlers
app.all('*', (req, res, next) => {
    
})

app.listen(process.env.PORT, console.log(`server listening on port ${process.env.PORT}`));