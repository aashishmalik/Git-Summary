const express = require('express')
const app = express()
var mongoose = require('mongoose')
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/picked', (req, res) => {
    res.render('pick');
})

app.listen(process.env.PORT || 4567, process.env.IP, () => {
    console.log("running on http://localhost:4567");
})
