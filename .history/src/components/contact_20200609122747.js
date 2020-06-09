import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Syed Zubair</h2>
            <img src='' alt='Avatar' />
          </Cell>
          <Cell col={6}>half page</Cell>
        </Grid>
      </div>
    );
  }
}

export default contact;
