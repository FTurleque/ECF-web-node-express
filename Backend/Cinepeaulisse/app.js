const express = require('express')
const app = express()
const router = require('./routes/router')

app.use(express.urlencoded())
app.use(express.json())

app.use((req, res, next) => {
    let method = req.method
    let path = req.originalUrl
    console.log(`${method} ${path}`)
    next()
})
// app.get('/', (req, res) => {
//     res.send("Bon courage à tous")
// })

app.use('/public', express.static(__dirname + '/public'))

require('./middlewares/liquid')(app)

app.use('/', router)

// app.use(function(req, res, next) {
//     next(createError(404))
// })

app.listen(3000, () => {
    console.log(`Application should be ready on port 3000 : http://localhost:3000/films`)
})