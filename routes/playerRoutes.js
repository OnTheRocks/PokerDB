const express = require('express');
const router = express.Router();
const Player = require("../Models/Player")

router.route("/create").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const nickName = req.body.nickName;
  const phone = req.body.phone;
  const email = req.body.email;
  const location = req.body.location;
  const notes = req.body.notes;
  const newPlayer = new Player({
    firstName,
    lastName,
    nickName,
    phone,
    email,
    location,
    notes
  });

  newPlayer.save();
})

router.route("/players").get((req, res) => {
  Player.find()
    .then(foundPlayers => res.json(foundPlayers))
})

module.exports = router;