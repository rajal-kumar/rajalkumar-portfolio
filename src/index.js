import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom"
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

import App from './App';
import About from './components/About'
import Contact from './components/Contact'
import Head from './components/Head'
import LandingPage from './components/LandingPage'
import Projects from './components/Projects'


ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route exact path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/head" component={Head} />
      <Route path="/" component={LandingPage} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
, 

document.getElementById('root'));

