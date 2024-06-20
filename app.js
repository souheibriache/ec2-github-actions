const express = require('express')
const cors = require('cors')
const data = require('./data/users.data')
require('dotenv').config();

const PORT = process.env.PORT

const app = express()
app.use(cors())

app.get('/api/users' , (req, res) => {
    res.status(200).json(data.users)
})

app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`);
})