import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
    {/* Project 1 */}
        <Card shadow={2} style={{ width: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background:
                "url(https://www.baboon.ro/poze/2016/07/HTML-and-CSS-Video-Tutorial-1170x650.jpg) center / cover"
            }}
          >
            First Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border style={{textAlign: "center"}}>
            <Button colored><i class="fab fa-github"> Github</i></Button>
            <Button colored><i class="fab fa-codepen"> Codepen</i></Button>
            <Button colored><i class="fas fa-link"> Livedemo</i></Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="link" />
          </CardMenu>
        </Card>

        {/* Project 2 */}
        <Card shadow={2} style={{ width: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background:
                "url(https://www.baboon.ro/poze/2016/07/HTML-and-CSS-Video-Tutorial-1170x650.jpg) center / cover"
            }}
          >
            Secound Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border style={{textAlign: "center"}}>
            <Button colored><i class="fab fa-github"> Github</i></Button>
            <Button colored><i class="fab fa-codepen"> Codepen</i></Button>
            <Button colored><i class="fas fa-link"> Livedemo</i></Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="link" />
          </CardMenu>
        </Card>

        {/* Project 3 */}
        <Card shadow={2} style={{ width: "400px", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "200px",
              background:
                "url(https://www.baboon.ro/poze/2016/07/HTML-and-CSS-Video-Tutorial-1170x650.jpg) center / cover"
            }}
          >
            Third Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            sagittis pellentesque lacus eleifend lacinia...
          </CardText>
          <CardActions border style={{textAlign: "center"}}>
            <Button colored><i class="fab fa-github"> Github</i></Button>
            <Button colored><i class="fab fa-codepen"> Codepen</i></Button>
            <Button colored><i class="fas fa-link"> Livedemo</i></Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name="link" />
          </CardMenu>
        </Card>
        </div>
        
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is JavaScript</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Bootstrap</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is Angular</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs" >
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>
            <i class="fab fa-html5"> HTML</i> /{" "}
            <i class="fab fa-css3-alt"> CSS</i>
          </Tab>
          <Tab>
            <i class="fab fa-js"> JavaScript</i>
          </Tab>
          <Tab>
            <i class="fab fa-bootstrap"> Bootstrap</i>
          </Tab>
          <Tab>
            <i class="fab fa-react"> React</i>
          </Tab>
          <Tab>
            <i class="fab fa-angular"> Angular</i>
          </Tab>
        </Tabs>
        
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        
      </div>
    );
  }
}

export default Projects;
