import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">PokerDB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Players</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Create New Player</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <nav className="navbar bg-dark container">
    //   <h3><Link to="/">Home</Link></h3>
    //   <h3><Link to="/players">Players</Link></h3>
    //   <h3><Link to="/create">Create New Players</Link></h3>
    // </nav>
  )
}
