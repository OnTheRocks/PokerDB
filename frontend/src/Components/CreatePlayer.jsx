import React from 'react'

function CreatePlayer() {
  return (
    <div className="container">
      <h1>Create New Player</h1>
      <form>
        <div className="mb-3 form-group">
          <label for="firstName" className="form-label">First Name</label>
          <input id="firstName" name="firstName" className="form-control"></input>

          <label for="lastName" className="form-label">Last Name</label>
          <input id="lastName" name="lastName" className="form-control"></input>

          <label for="nickName" className="form-label">Nickname</label>
          <input id="nickName" name="nickName" className="form-control"></input>

          <label for="phone" className="form-label">Nickname</label>
          <input id="phone" name="nickName" className="form-control"></input>

          <label for="email" class="form-label">Email address</label>
          <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp"></input>
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

          <label for="location" className="form-label">Location</label>
          <input id="location" name="location" className="form-control"></input>

          <label for="notes" className="form-label">Notes</label>
          <textarea id="notes" name="notes" className="form-control"></textarea>
        </div>
          
          <button type="button" class="btn btn-outline-success">Add Player</button>

      </form>
    </div>
  )
}

export default CreatePlayer
