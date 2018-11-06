import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl'
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <div style={{height: '300px', position: 'relative'}}>
            <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
                <Header transparent title="Title" style={{color: 'white'}}>
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Header>
                <Drawer title="Title">
                    <Navigation>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                        <a href="#">Link</a>
                    </Navigation>
                </Drawer>
                <Content />
            </Layout>
       </div>
        <Header />
      </div>
    );
  }
}

export default App;
