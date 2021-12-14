import { useEffect, useState } from 'react'

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


  return  (  
    <div className="container">
      <h1>Player List</h1>
      {players.map(player =>    
      <div>
        <h1>1{player.nickName}</h1>
        
      </div>
  )}
      
    </div>
    

  )}

export default Players
