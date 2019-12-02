const express = require('express')
const router = express.Router()

// Sign In Page
router.get('/signin', (req, res) => res.send('Sign In'))

// Sign Up Page
router.get('/signup', (req, res) => res.send('Sign Up'))

module.exports = router
