import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="big-content">
            <Layout>
    <Header className="header-colour" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Rajal Kumar</Link>} scroll>
                    <Navigation>
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Rajal Kumar</Link>}>
                    <Navigation>
                        <Link to="/about">About me</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
       </div>
      </div>
    );
  }
}

export default App;
