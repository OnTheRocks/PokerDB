const mongoose = require('mongoose') 
const Player = require("./Player") 

mongoose.connect("mongodb://localhost/PokerDB", () => { console.log("Connected to PokerDB") }, e => console.error(e))

run()
  async function run() {
  const player = await Player.create({ name: "The Big Uno" })
  // const player = new Player({ name: "Big Nate"})
  // await player.save()
  console.log("New player '", player.name, "' saved.")
}


