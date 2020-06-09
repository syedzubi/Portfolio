import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
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
            <h2 style={{ paddingTop: "2em" }}>Syed Zubair</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              harum nostrum et voluptates odio cupiditate illo in? Asperiores
              reiciendis repudiandae natus fugiat autem quae modi placeat ad,
              veritatis perspiciatis porro.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>3226 Edison Street Windsor, Ontario</p>
            <h5>Phone</h5>
            <p>(647)863-9043</p>
            <h5>Email</h5>
            <p>zubai113@uwindsor.ca</p>
            <h5>Web</h5>
            <p>www.syedzubair.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>

          <Cell className='resume-right-col' col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName={"Visvesvaraya Technological University"}
              schoolDescription={
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis error voluptate dolor libero!?"
              }
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default resume;
