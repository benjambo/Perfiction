<h1 align="center">Welcome to Perfiction 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/benjambo/Perfiction" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

> Perfiction is a coffeshop with enthusiastic coders

### ✨ [Demo](https://perfiction.herokuapp.com/home)

## Prerequisites

- axios ^0.19.0
- bootstrap ^4.3.1
- mdbootstrap ^4.10.0
- react ^16.12.0
- react-bootstrap ^1.0.0-beta.16
- react-dom ^16.12.0
- react-router-auth ^1.0.1
- react-router-dom ^5.1.2
- react-scripts 3.2.0
- react-spring ^8.0.27
- styled-components ^4.4.1

## Install

```sh
npm install
```

## Usage

```sh
npm start,      #For react-scripts start
REST-API        #Frontend -> Backend -> Database, Check more in Backend-folder Readme.md
```

## Run tests

```sh
npm test        #Runs tests with Jest
```

## REST-API

```sh
GET: #Used to request data from the server, typically used to read data

app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  //console.log(req.body)
})

POST #Used to submit data, typically used to create new entities or edit already existing entities

app.post('/signup', (req, res) => {
  res.sendFile(__dirname + '/build/index.html')
  const { firstName, lastName, email, password } = req.body
      const newUser = new User({
        firstName,
        lastName,
        email,
        password
      })
      // Save user
       newUser
        .save()
        .then(user => {
        console.log(user)
       })
        .catch(err => console.log(err))
})

```

## Author

👤 **Benjamin Bowo & Jere Saarelma**

- Github: [@benjambo](https://github.com/benjambo)
- Github: [@jepu32](https://github.com/jepu32)

## Show your support

Give a ⭐️ if this project helped you!
