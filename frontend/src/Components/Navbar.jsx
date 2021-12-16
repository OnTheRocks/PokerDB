import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">PokerDB</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/players" className="nav-link" href="/players">Players</Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link" href="/Create">Create New Player</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}