const express = require('express')
const router = express.Router()
//const bcrypt = require('bcryptjs')
//const passport = require('passport')

// Load User model
//const User = require('../models/User')
//const { forwardAuthenticated } = require('../config/auth')

// Login Page
router.get('/', (req, res) => res.render('signin'))

// Signup Page
router.get('/signup', (req, res) =>
  res.sendFile(path.join(__dirname + '/build/index.html'))
)

// Signup Handle
router.post('/signup'),
  (req, res) => {
    console.log(req.body)
  }

module.exports = router
