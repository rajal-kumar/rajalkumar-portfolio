import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import '../App.css'

class Header extends Component {
  render() {
    return (
      <div className="page-header row">
        <h1>Rajal Kumar <small>Full Stack Web developer</small></h1>
        <br />
        <Link to="/" className="col-md-4">Home</Link>
        <Link to="/projects" className="col-md-4">Projects</Link> 
        <Link to="/contact" className="col-md-4">Contact Me!</Link> 
      </div>
    );
  }
}

export default Header;