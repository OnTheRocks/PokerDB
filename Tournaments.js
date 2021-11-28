const mongoose = require("mongoose")

const tournamentsSchema = new mongoose.Schema({
  date: Date,
  pokerGame: String,
  blinds: String,
  buyIn: Number,
  numberOfPlayers: Number,
  players: [{ 
    type: mongoose.SchemaTypes.ObjectId, 
    ref: 'Player'
  }],
  payOut: String,

})

module.exports = mongoose.model("Tournaments", tournamentsSchema)