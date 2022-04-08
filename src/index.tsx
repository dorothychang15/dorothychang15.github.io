import ReactDOM from 'react-dom';
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import ImageCarouselModal from './ImageCarouselModal';
import Snow from './Snow';
import Travel from './Travel';

export function App() {
  return ( 
    <div>
      <Navbar bg="light" expand="md" variant="light" className="navbar-bg">
        <Container>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
            <div><Navbar.Brand>dorothy chang</Navbar.Brand></div>
            <div>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/" active>home</Nav.Link>
                  <LinkContainer to="/travel">
                    <Nav.Link>travel</Nav.Link>
                  </LinkContainer>
                  <Nav.Link href="/about">about</Nav.Link>
                  <Nav.Link href="/contact">contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </Container>
      </Navbar>
      <div className="main-container">
        <div className="main-inner-container">
          <h1>hello!</h1>
          <ImageCarouselModal />
        </div>
      </div>
      <Snow numDrops={30} />
    </div>
  );
}

ReactDOM.render((
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/travel" element={<Travel />} />
    </Routes>
  </HashRouter>
), document.querySelectorAll('div')[0]);