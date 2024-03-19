const mongoose = require("mongoose");
const hotelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    roomType:{
      type: String,
      required : true
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      defaut: 0,
    },

    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);


const Hotel = mongoose.model("Room", hotelSchema);
module.exports = Hotel;
