import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import zubair from "./sample_image.jpg";
export class resume extends Component {
  render() {
    return (
      <div className='class1'>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "Center" }}>
              {/*<img src={zubair} alt='avatar' style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Syed Zubair</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            */}
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
