import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl'

class LandingPage extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
            <Cell col={12}>
              <img src="https://www.crust-media.com/img/team/prince-avatar.jpg" alt="avatar" className="avatar-img" />
              <div className="banner-text">
                <h1>Fullstack Web Developer</h1>

                <hr />

                <p>HTML/CSS | JavaScript | React | React360/VR | Redux | NodeJS | Express | SQL/liteDB | BootStrap2</p>

                <div className="social-links">
                    {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/rajal-kumar-3b00ab10b/" rel="noopener noreferrer" target="_blank">
                    <i className=" fa fa-linkedin-square" aria-hidden="true" />
                  </a>
                    { /* GitHub */ }
                  <a href="https://github.com/rajal-kumar" rel="noopener noreferrer" target="_blank">
                    <i className=" fa fa-github-square" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;