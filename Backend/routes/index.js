const express = require('express')
const router = express.Router()
//const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth')

// Welcome Page
router.get('/home', (req, res) => {
  req.render('home')
  console.log(req.body)
})

// Dashboard
/*router.get('/dashboard', (req, res) =>
  res.render('dashboard', {
    user: req.user
  })
)*/

module.exports = router
