import React, { Component } from "react";
import { Layout, Navigation, Drawer, Header, Content } from "react-mdl";

export class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header title='Title' scroll>
            <Navigation>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
            </Navigation>
          </Header>
          <Drawer title='Title'>
            <Navigation>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
              <a href='#'>Link</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
