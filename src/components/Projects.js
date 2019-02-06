import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton  } from 'react-mdl'
import '../App.css'

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 }
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return(
        <div className='projects-grid'>
          {/* Project #1 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{colour: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project #1</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typescripting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button coloured='true'>GitHub</Button>
            <Button coloured='true'>CodePen</Button>
            <Button coloured='true'>Live Demo</Button>
          </CardActions>
          <CardMenu style={{colour: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project #2 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{colour: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project #2</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typescripting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button coloured='true'>GitHub</Button>
            <Button coloured='true'>CodePen</Button>
            <Button coloured='true'>Live Demo</Button>
          </CardActions>
          <CardMenu style={{colour: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        {/* Project #3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
          <CardTitle style={{colour: '#fff', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png) center / cover'}}>React Project #3</CardTitle>
          <CardText>
            Lorem Ipsum is simply dummy text of the printing and typescripting industry. Lorem Ipsum has been the industry's
          </CardText>
          <CardActions border>
            <Button coloured='true'>GitHub</Button>
            <Button coloured='true'>CodePen</Button>
            <Button coloured='true'>Live Demo</Button>
          </CardActions>
          <CardMenu style={{colour: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
        
      )
    } else if(this.state.activeTab === 1) {
      return(
        <div><h1>This is JavaScript</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return(
        <div><h1>This is HTML</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return(
        <div><h1>This is Wordpress</h1></div>
      )
    }
  }

  render() {
    return (
      <div className="row">
      <br />
      <br />
          <h1>Projects</h1> 
        <div className="catergory-tabs">
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>React</Tab>
            <Tab>JavaScript</Tab>
            <Tab>HTML</Tab>
            <Tab>Wordpress</Tab>
          </Tabs>

          
            <Grid>
              <Cell col={12}>
                <div className="content">
                  {this.toggleCategories()}
                </div>
              </Cell>
            </Grid>
    
        </div>
      </div>
    );
  }
}

export default Projects;