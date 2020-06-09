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
                src='https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png'
                alt='avatar'
                style={{ height: "200px" }}
              />
            </div>
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
