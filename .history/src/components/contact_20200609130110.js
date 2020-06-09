import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
/*import zubair from "./sample_image.jpg";*/
export class contact extends Component {
  render() {
    return (
      <div className='contact-body'>
        <Grid className='contact-grid'>
          <Cell col={6}>
            <h2>Syed Zubair</h2>
            <img
              /*src={zubair}*/
              src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
              alt='Avatar'
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
              corrupti commodi adipisci vero obcaecati eum rem non recusandae
              sint suscipit impedit? Distinctio odio, quos sit cumque a aperiam
              error veniam?
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className='contact-list'>
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className='fa fa-phone-square' aria-hidden='true'></i>
                    (647)863-9043
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className='fa fa-envelope' aria-hidden='true'></i>
                    zubai113@uwindsor.ca
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className='fa fa-linkedin' aria-hidden='true'></i>
                    https://www.linkedin.com/in/s27/
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default contact;
