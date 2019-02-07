import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>Left Side</Cell>
        <Cell col={8}>Right Side</Cell>
      </Grid>
    )
  }
}

export default Experience