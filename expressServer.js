const express = require("express")
const app = express()
const port = 3200

app.get('/', (req, res)=> {
    res.send('you are on root')
})

app.listen(port, ()=> {
    console.log(`rest-api running on port ${port}`)
})

module.exports = app;