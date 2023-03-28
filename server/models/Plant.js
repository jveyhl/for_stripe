//to-do setup Plant data model based on Figma

/*
name: string
sunlight requirements: dropdown
water requirements: integer ml
watering frequency: dropdown (daily, weekly, biweekly, monthly)
humidity:
temperature:
*/

const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
        type: String,
        required: true
    },
    description: {
      type: String,
    },
    sunlight: {
      type: String  
    },
    water: {
        type: Number  
      },
    humidity: {
        type: Number  
      },
    temperature: {
        type: Number  
      },
  },
  {
    timestamps: true,
  }
);

const Plant = mongoose.model("Plant", plantSchema);
module.exports = Plant;
