const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const bcrypt = require('bcryptjs')
const passport = require('passport')
//const { ensureAuthenticated } = require('./config/auth')

const app = express()

app.use(bodyParser.json())

const cors = require('cors')
app.use(express.static('build'))
app.use(cors())

app.use(morgan('tiny'))

// User model
const User = require('./models/User')

// Passport config
require('./config/passport')(passport)

// DB Config
const db = require('./config/keys').MongoURI

// Bodyparser
app.use(express.urlencoded({ extended: false }))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(console.log('MongoDB connected...'))
  .catch(err => console.log(err))

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')))

// An api endpoint that returns a user
app.get('/api/user', (req, res) => {
  res.json(account)
})

// Handles sign in requests
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

// Handles sign up requests
app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

// Handles home page requests
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

// Handles catalog page requests
app.get('/catalog', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

// Handles about page requests
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

// Sends form data to server and db
app.post('/signup', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  const { firstName, lastName, email, password } = req.body

  User.findOne({ email: email }).then(user => {
    // User exists
    if (user) {
      //res.status(404)
      console.log('--- EMAIL ALREADY EXISTS ---')
    } else {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password
      })

      // Hash Password
      bcrypt.genSalt(10, (err, salt) =>
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err
          // Set password to hashed
          newUser.password = hash
          // Save user
          newUser
            .save()
            .then(user => {
              console.log(user)
            })
            .catch(err => console.log(err))
        })
      )
    }
  })
})

// Signin Handle
app.post('/', (req, res, next) => {
  //res.sendFile(__dirname + '/build/index.html')
  passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/'
  })(req, res, next)
})

// Logout Handle
/*app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})*/

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log('Server started on port ' + PORT))
