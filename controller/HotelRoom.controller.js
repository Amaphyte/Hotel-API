const hotelRoom = require('../models.hotelroom.js')


const getHotelRooms  = async (req, res) => {
    try {
        const hotelRooms = await HotelRoom.find({});
        res.status(200).json(hotelRooms)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

const getHotelRoom = async (req, res) =>{
    try {
        const {id} = req.params
        const hotel1 = await HotelRoom.findById(id);
        res.status(200).json (hotel1)
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};


const createHotelRoom = async (req, res) => {
    try {
        const {id} = req.params
        const hotel1 = await HotelRoom.findById(id);
        res.status(200).json (hotel1)
    } catch (error) {
        res.status(500).json ({message: error.message})
    }
};

const updateHotelRoom = async (req, res) => {
    try {
        const {id} = req.params
       const hotel = await HotelRoom.findById(id, req.body);
       if (!HotelRoom) {
        return res.status(404).json({message: "Hotel Room not found"})
       } else {
        const updatedRoom = await HotelRoom.findById(id);
        res.status(200).json(hotel, "Hotel Room Successfully Updated!!");
        
       }
    } catch (error) {
        res.status(500).json ({message: error.message});
    }
};


const deleteHotelRoom= async (req, res) => {
    try {
       const {id} = req.params
       const hotel1 = await HotelRoom.findById(id);
       if (!HotelRoom) {
           return res.status(404).json({message: "Hotel Room not found"})
       } 
       
       res.status(200).json (hotel1, "HOtel Room Successfully deleted!!")
   } catch (error) {
       res.status(500).json ({message: error.message})
   }
};

module.exports ={
    getHotelRooms,
    getHotelRoom,
    createHotelRoom,
    updateHotelRoom,
    deleteHotelRoom
};