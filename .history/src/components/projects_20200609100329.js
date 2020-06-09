import React, { Component } from "react";
import { Tab, Tabs } from "react-mdl";

export class projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  if(this.state.activeTab === 0){
    return(
      <div><div>
    )
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

        <section className='projects-grid'>{this.toggleCategories()}</section>
      </div>
    );
  }
}

export default projects;
