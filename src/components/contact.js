import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Gabriel Bundea</h2>
            <img
              src="http://www.hotavatars.com/wp-content/uploads/2019/01/I80W1Q0.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact me</h2>
            <hr></hr>
            <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent style={{fontSize: '30px'}}>
                <p>Phone: 0722386695</p>
                    </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '30px'}}>
              <p>E-mail: gabriel_bundea@hotmail.com</p>
                    </ListItemContent>
              </ListItem>
              <ListItem>
              <ListItemContent style={{fontSize: '30px'}}>
                <p>Skype: gabriel_bundea</p>
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

export default Contact;
