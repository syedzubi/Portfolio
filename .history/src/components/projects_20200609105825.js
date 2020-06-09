import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText,
} from "react-mdl";

export class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://portswigger.net/cms/images/54/14/6efb9bc5d143-article-190612-github-body-text.jpg) center / cover",
              padding: "5em",
            }}
          >
            GitHub User Finder Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas praesentium perspiciatis, cumque quae ex
            nesciunt non quidem dolore error. Voluptatibus numquam consequatur
            sequi animi? Fuga, molestiae repudiandae. Iusto, corporis?
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "170px",
              background:
                "url(https://portswigger.net/cms/images/54/14/6efb9bc5d143-article-190612-github-body-text.jpg) center / cover",
              padding: "5em",
            }}
          >
            GitHub User Finder Project
          </CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem quas praesentium perspiciatis, cumque quae ex
            nesciunt non quidem dolore error. Voluptatibus numquam consequatur
            sequi animi? Fuga, molestiae repudiandae. Iusto, corporis?
          </CardText>
          <CardActions border>
            <Button colored>GitHub</Button>
            <Button colored>CodePen</Button>
            <Button colored>LiveDemo</Button>
          </CardActions>
          <CardMenu style={{ color: "#fff" }}>
            <IconButton name='share' />
          </CardMenu>
        </Card>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>Web Search Engine</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>Machine Learning and Optimization</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>Sentimental Analysis</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div className='category-tabs'>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>GitHub User Finder</Tab>
          <Tab>Web Search Engine</Tab>
          <Tab>Machine Learning and Optimization</Tab>
          <Tab>Sentimental Analysis</Tab>
          {/*<Tab>Advanced System Programming</Tab>
          <Tab>Advanced Database</Tab>
          <Tab>Topics in Applied AI</Tab>*/}
        </Tabs>
        <Grid className='projects-grid'>
          <Cell col={12}>
            <div className='content'>{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default projects;
