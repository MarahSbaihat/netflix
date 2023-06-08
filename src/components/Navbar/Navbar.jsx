import React, { Component } from 'react';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-transparent">
          <div className="container">
            <a className="navbar-brand" href="#"><img src="assets/img/logo.png" alt="logo of netflix" /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#Footer">Footer</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
