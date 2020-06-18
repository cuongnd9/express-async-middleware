const express = require('express')
const { fetchData, throwError } = require('./middlewares')

const app = express()

app.get('/', (req, res) => res.send('Hello 👋 @103cuong'))

app.get('/api', throwError, fetchData)

app.use((err, req, res, next) => {
    res.status(500).json({
        statusCode: 500,
        message: err.message,
    })
})

app.listen(4000, () => console.log('App is listening on port 4000'))
