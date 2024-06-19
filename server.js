const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')
const connectDB = require('./Config/db')



const app = express()

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit: '10mb'}))

readdirSync('./Routes')
    .map((e) => app.use('/api', require('./Routes/' + e)))


app.listen(5000, () => console.log('Server is running on port 5000'))