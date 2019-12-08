const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())

const cors = require('cors')

app.use(express.static('build'))
app.use(cors())

// Routes
app.use('/', require('./routes/index'))

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server started on port ${PORT}`))
