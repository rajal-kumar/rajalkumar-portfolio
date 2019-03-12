import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import '../App.css'

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Rajal Kumar</h2>
            <img 
            src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_African_Teenager-512.png"
            alt="avatar"
            style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />

            <div className="contact-list">
              <List>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-slack" aria-hidden="true"/>
                  Rajal Kumar
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-envelope-square" aria-hidden="true"/>
                  rajalkumar@rajalmail.com
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  Rajal Kumar
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                  <i className="fa fa-github-square" aria-hidden="true"/>
                  rajal-kumar
                </ListItemContent>
              </ListItem>
            </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;