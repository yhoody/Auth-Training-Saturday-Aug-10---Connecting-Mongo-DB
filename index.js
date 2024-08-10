const express = require('express')
const app = express()
const port = 9000 
const connectDb = require('./config/db.js')
const userRoute = require('./routes/userRoute.js')

connectDb()

app.use(express.json())

app.get('/api', (req,res)=>
{
    res.json({message: "Welcome to my server"})
})

app.get('/api/users', (req,res)=>
{
    res.json({message: "This is a list of all my users"})
})


app.use("/api", userRoute)



app.listen(port, ()=>
{
    console.log(`Server started succesfully on http://localhost:${port}`)
}) 