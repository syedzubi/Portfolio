import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
export class resume extends Component {
  render() {
    return (
      <div className='class1'>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "Center" }}>
              <img
                src='https://www.shareicon.net/data/512x512/2017/07/13/888372_man_512x512.png'
                alt='Avatar'
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Syed</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
          </Cell>

          <Cell className='resume-right-col' col={8}>
            Right Side
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default resume;
