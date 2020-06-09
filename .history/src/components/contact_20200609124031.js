import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
/*import zubair from "./sample_image.jpg";*/
import { List, ListItem, ListItemContent } from "react-mdl";
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
            <List>
              <ListItem>
                <ListItemContent icon='person'>Bryan Cranston</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon='person'>Aaron Paul</ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent icon='person'>Bob Odenkirk</ListItemContent>
              </ListItem>
            </List>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default contact;
