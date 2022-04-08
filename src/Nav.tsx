import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ReactNav from 'react-bootstrap/Nav';

export default function Nav({
  activeTab
}: { activeTab: string }) {
  return (
    <Navbar bg="light" expand="md" variant="light" className="navbar-bg">
      <Container>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100vw'}}>
          <div><Navbar.Brand>dorothy chang</Navbar.Brand></div>
          <div>
            <Navbar.Collapse id="basic-navbar-nav">
              <ReactNav className="me-auto">
                <ReactNav.Link href="/" active={activeTab === 'home'}>home</ReactNav.Link>
                <LinkContainer to="/skincare">
                  <ReactNav.Link active={activeTab === 'skincare'}>skincare</ReactNav.Link>
                </LinkContainer>
              </ReactNav>
            </Navbar.Collapse>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}