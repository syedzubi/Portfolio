import React, { Component } from "react";
import {Grid, Cell} from react-mdl;

export class education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>Left Side</Cell>
        <Cell col={8}>Left Side</Cell>
      </Grid>
    );
  }
}

export default education;
