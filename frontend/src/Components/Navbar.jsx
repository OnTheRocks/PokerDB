import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">PokerDB</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a><Link to="/" class="nav-link active" aria-current="page">Home</Link></a>
            </li>
            <li class="nav-item">
              <a><Link to="/players" class="nav-link" href="/players">Players</Link></a>
            </li>
            <li class="nav-item">
              <a><Link to="/create" class="nav-link" href="/Create">Create New Player</Link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}