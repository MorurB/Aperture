let express = require('express')

let app = express()

app.use( express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form2.html')
})


app.post('/check-user', (req, res) => {
    let username = req.body.username;
    if(username == '') {
        res.sendFile(__dirname + '/index.html')
    }

})

app.listen(3000, () => {
    console.log('http://localhost:3000')
})