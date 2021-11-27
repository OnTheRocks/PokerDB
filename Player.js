const mongoose = require("mongoose")

const playerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  nickName: String,
  phone: {
    type: String,
    required: true,
    minlength: 12,
    maxlength: 12,
  } ,
  email: {
    type: String,
    required: true,
    lowercase: true,
  } ,
  location: String,
  notes: String,
  createdAT: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  
  
})

module.exports = mongoose.model("Player", playerSchema)