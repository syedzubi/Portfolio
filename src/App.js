import React, { Component } from "react";
import { Layout, Navigation, Drawer, Header, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";
import "./App.css";

export class App extends Component {
  render() {
    return (
      <div className='demo-big-content'>
        <Layout>
          <Header className='header-color' title='Syed Zubair Portfolio' scroll>
            <Navigation>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/resume'>Resume</Link>
            </Navigation>
          </Header>
          <Drawer title='Title'>
            <Navigation>
              <Link to='/aboutme'>About Me</Link>
              <Link to='/projects'>Projects</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/resume'>Resume</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className='page-content' />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
