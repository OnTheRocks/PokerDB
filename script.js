const mongoose = require('mongoose') 
const Player = require("./Player") 

mongoose.connect("mongodb://localhost/PokerDB", () => { console.log("Connected to PokerDB") }, e => console.error(e))

run()
  async function run() {
    try {
      const player = await Player.create({ 
        firstName: "Nathan",
        lastName: "Huber",
        nickName: "On The Rocks",
        phone: "312.231.2337",
        email: "nathan_huber@yahoo.com",
        location: "Morton Grove",
        notes: "User is pretty tight aggressive, seems polite."
      })
      console.log("New player '", player, "' saved.")
    } catch (e) {
      console.log(e.message)
    }  
}


