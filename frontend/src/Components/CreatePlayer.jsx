import React, { useState } from 'react'

function CreatePlayer() {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    nickName: '',
    phone: '',
    email: '',
    location: '',
    notes: '',
  })

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();    
    console.log(input)
  }

  return (
    <div className="container">
      <h1>Create New Player</h1>
      <form>
        <div className="mb-3 form-group">
          <label className="form-label">First Name</label>
          <input onChange={handleChange} id="firstName" name="firstName" value={input.firstName} className="form-control"></input>

          <label className="form-label">Last Name</label>
          <input onChange={handleChange} id="lastName" name="lastName" value={input.lastName} className="form-control"></input>

          <label className="form-label">Nickname</label>
          <input onChange={handleChange} id="nickName" name="nickName" value={input.nickName} className="form-control"></input>

          <label className="form-label">Phone</label>
          <input onChange={handleChange} id="phone" name="phone" value={input.phone} className="form-control"></input>

          <label className="form-label">Email address</label>
          <input onChange={handleChange} type="email" name="email" value={input.email} className="form-control" id="email" aria-describedby="emailHelp"></input>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

          <label className="form-label">Location</label>
          <input onChange={handleChange} id="location" name="location" value={input.location} className="form-control"></input>

          <label className="form-label">Notes</label>
          <textarea onChange={handleChange} id="notes" name="notes" value={input.notes} className="form-control"></textarea>
        </div>
          
          <button onClick={handleClick}  type="button" className="btn btn-outline-success">Add Player</button>

      </form>
    </div>
  )
}

export default CreatePlayer
