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
                "url(https://1000logos.net/wp-content/uploads/2018/08/GitHub-Logo.png) center / cover",
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

        <section className='projects-grid'>
          <Grid className='projects-grid'>
            <Cell col={12}>
              <div className='content'>{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default projects;
