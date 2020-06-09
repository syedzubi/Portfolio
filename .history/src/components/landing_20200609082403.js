import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
//import Avatar from "./sample_image.jpg";
export class landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className='landing-grid'>
          <Cell col={12}>
            <img
              src='https://i.ya-webdesign.com/images/funny-png-avatar-2.png'
              alt='avatar'
              className='avatar-img'
            />
            <div className='banner-text'>
              <h1>Full Stack Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | JavaScript | BootStrap | React | React Native |
                NodeJs | MySQL | MongoDB{" "}
              </p>
              <div className='social-links'>
                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa fa-github-square'></i>
                </a>

                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa-github-square' aria-hidden='true'></i>
                </a>

                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa-github-square' aria-hidden='true'></i>
                </a>

                <a
                  href='http://google.com'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <i className='fa-github-square' aria-hidden='true'></i>
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default landing;
