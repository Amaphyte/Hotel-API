const express = require('express')
const mongoose = require('mongoose');
const roomType = require('./models/roomType.js');
const HotelRoom = require('./models/hotelroom.js');
const hotelRoomRoute = require= ('./routes/hotelRoom.route.js');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.use('/api/hotels', hotelRoomRoute);



app.listen(3000, () =>{
    console.log("server is running on port 3000")
});


app.get("/", (req, res) => {
    res.send("Hello from Node API")
});


mongoose.connect("mongodb+srv://amoguuche042:R6NxYUmWxF5wHZpi@hotel-api.zoegzcb.mongodb.net/?retryWrites=true&w=majority&appName=Hotel-API")
.then(() => {
    console.log("connected to database!");
}) 
.catch(() => {
    console.log("connection failed!");
});