import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class resume extends Component {
  render() {
    return (
      <div className='class1'>
        <Grid>
          <Cell col={4}>Left Side</Cell>
          <Cell className='resume-right-col' col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default resume;
