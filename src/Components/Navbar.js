import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-primary" type="submit">Search</button>
          </form> */}
          <button className="theme1" onClick={()=>{props.togglemode("purple")}}></button>
          <button className="theme2" onClick={()=>{props.togglemode("blue")}}></button>
          <button className="theme3" onClick={()=>{props.togglemode("green")}}></button>
          {/* <div className={`form-check form-switch mx-10 text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="theme" onChange={props.togglemode}/>
                <label className="form-check-label" htmlFor="theme">Enable Dark Mode</label>
          </div> */}
        </div>
      </div>
    </nav>
    </div>
  )

}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

// Navbar.defaultProps = {
//     title:"deault Title",
//     aboutText:"default about"
// }