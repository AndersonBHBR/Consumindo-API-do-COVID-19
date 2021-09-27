const cors = require('cors')
const { json } = require('express')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {

    // response é a resposta do axios MAS eu tiro o data de dentro do response
    const { data } = await axios('https://api.covid19api.com/countries')
    return res.json(data)
})

app.listen('4567')