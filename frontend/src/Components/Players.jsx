import React, { useEffect, useState } from 'react'

function Players() {
  const [players, setPlayers] = useState([{
    firstName: '',
    lastName: '',
    nickName: '',
    phone: '',
    email: '',
    location: '',
    notes: ''
  }])



  useEffect(() => {
    fetch("/players").then(res => {      
      if(res.ok) {
        return res.json()
      }      
    }).then(jsonRes => setPlayers(jsonRes));   
  })

  return (
    <div className='container'>
      <h1>Players Page</h1>
      {players.map(player =>
        <div>
          <h3>{player.firstName} {player.lastName}</h3>
          <p>{player.nickName}</p>         
        </div>
      )}
    </div>
  )
}

export default Players
