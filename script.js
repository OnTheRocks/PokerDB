const mongoose = require('mongoose') 
const { populate } = require('./Player')
const Player = require("./Player") 
const Tournaments = require('./Tournaments')

mongoose.connect("mongodb://localhost/PokerDB", () => { console.log("Connected to PokerDB") }, e => console.error(e))

// run()
//   async function run() {
//     try {
//       const player = await Player.create({ 
//         firstName: "Nathan",
//         lastName: "Huber",
//         nickName: "On The Rocks",
//         phone: "312.231.2337",
//         email: "nathan_huber@yahoo.com",
//         location: "Morton Grove",
//         notes: "User is pretty tight aggressive, seems polite."
//       })
//       console.log("New player '", player, "' saved.")
//     } catch (e) {
//       console.log(e.message)
//     }  
// }

// run()
//   async function run() {
//     try {
//       const tournament = await Tournaments.create({ 
//         date: 12/01/2021,
//         pokerGame: "No-Limit Texas HOlde'em",
//         blinds: "$25/$50",
//         buyIn: 20,
//         numberOfPlayers: 12,
//         players: [
//                   "61a3278fccb91f0ced6b7324", 
//                   "61a3277e54162e44901d0546", 
//                   "61a3276e42f7748fd9234241",
//                   "61a3239f36b3187a9ae589e2"
//                   ],
//         notes: "User is pretty tight aggressive, seems polite."
//       })
//       console.log("New Tournament saved.")
//     } catch (e) {
//       console.log(e.message)
//     }  
// }

run()
  async function run() {
    try {
      const tournament = await Tournaments.where("buyIn")
        .gt(10)
        .populate('players')
      console.log(tournament)
    } catch (e) {
      console.log(e.message)
    }  
}