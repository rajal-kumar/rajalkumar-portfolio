import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './App.css';

import Head from './components/Head'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{height: '300px', position: 'relative'}}>
            <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                <Header className="header-colour" transparent title="Menu" style={{color: 'white'}}>
                    <Navigation>
                        <Link to="/">Home</Link> 
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title="Menu">
                    <Navigation>
                        <Link to="/">Home</Link> 
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
       </div>
        <Head />
      </div>
    );
  }
}

export default App;
