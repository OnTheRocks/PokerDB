import React from 'react'

function CreatePlayer() {
  return (
    <div className="container">
      <h1>Create New Player</h1>
      <form>
        <div className="mb-3">
          <label for="firstName" className="form-label">First Name</label>
          <input id="firstName" className="form-control"></input>
          <label for="lastName" className="form-label">Last Name</label>
          <input id="lastName" className="form-control"></input>
          <label for="nickName" className="form-label">Nickname</label>
          <input id="nickName" className="form-control"></input>

        </div>
      </form>
    </div>
  )
}

export default CreatePlayer
