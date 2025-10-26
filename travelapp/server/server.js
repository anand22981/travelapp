const express = require('express');
const hotelRouter = require('./routes/hotels.router')

const app = express();

const PORT = 3500;

app.use(express.json())
 
app.get('/',(req,res)=>{
    res.send('hello geeks')
})
app.use("/api/hotel", hotelRouter)



app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server is up and runnig at ${PORT}`)
})