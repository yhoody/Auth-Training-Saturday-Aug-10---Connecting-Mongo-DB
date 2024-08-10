const express = require('express')
const app = express()
const port = 9000 
const connectDb = require('./config/db.js')

connectDb()


app.get('/api', (req,res)=>
{
    res.json({message: "Welcome to my server"})
})

app.get('/api/users', (req,res)=>
{
    res.json({message: "This is a list of all my users"})
})






app.listen(port, ()=>
{
    console.log(`Server started succesfully on http://localhost:${port}`)
}) 