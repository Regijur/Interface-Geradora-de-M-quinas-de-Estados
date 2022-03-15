const express = require("express")

const app = express()

app.get('', (req, res) => {
    res.sendFile(__dirname + '/src/index.html')
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/src/style.css')
})

app.get('/main.js', (req, res) => {
    res.sendFile(__dirname + '/src/main.js')
})

app.listen(5000, () =>{
    console.log('Express started at http://localhoost:5000')
})