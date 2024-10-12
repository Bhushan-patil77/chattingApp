const express = require('express')
const cors = require('cors')
const http = require('http')

const app = express()

app.use(cors())


app.get('/register', (req, res)=>{
    res.status(200).json({success:'ok', message:'this is response from server'})
})



app.listen(5000, ()=>{
    console.log('server listening on port 5000')
})