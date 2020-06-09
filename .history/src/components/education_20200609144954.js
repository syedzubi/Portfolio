import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export class education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>
            {this.props.startYear} - {this.props.endYear}
          </p>
        </Cell>
        <Cell col={8}>Right Side</Cell>
      </Grid>
    );
  }
}

export default education;
