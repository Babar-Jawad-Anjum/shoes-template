import React from 'react'
import '../App.css'
import {FaOpencart} from 'react-icons/fa';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a style={{fontWeight: 'bold'}} className="navbar-brand" href="/">sneakers</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Collections</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Men</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Women</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact</a>
        </li>
      </ul>
      <div className="icon mx-3 p-1">
        <FaOpencart style={{fontSize:'25px'}} className='text-light'/>
      </div>
      <div className="nav-img mx-3 p-1">
      <img src={process.env.PUBLIC_URL + '/img/img4.jpg'} alt="card-img"/>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}
