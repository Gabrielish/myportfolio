import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Button, Tooltip} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
<div>
    <Layout fixedHeader>
        <Header className="header-color" title="Gabriel Bundea" scroll waterfall >
            <Navigation>
                
                <Link to="/"><Button raised colored ripple>Home</Button></Link>
                <Link to="/resume"><Tooltip label="Resume">Resume</Tooltip></Link>
                <Link to="/aboutme"><Tooltip label="About Me">About Me</Tooltip></Link>
                <Link to="/projects"><Tooltip label="Projects">Projects</Tooltip></Link>
                <Link to="/contact"><Tooltip label="Contact">Contact</Tooltip></Link>
            </Navigation>
        </Header>
        <Drawer title="Gabriel Bundea">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
