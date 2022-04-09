import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { suncareContent, shiseido, drjart, pipette } from './SkincareContent';

export default function Suncare() {
  return (
    <div className='step'>
      <Container>
        <Row>
          <Col>
            <h3 className='title'>{suncareContent.title}</h3>
            <p className='step-body'>
                This probably goes without saying, but sun protection is the most important thing you can do to protect your skin health and prevent signs of aging. <br/> <br/>
                There are two kinds of sunscreen: chemical and physical. Chemical sunscreen absorbs UV rays into the skin and neutralizes them, whereas physical sunscreen sits on top of the skin and UV rays bounce off of it. Physical sunscreen, also known as mineral sunscreen, tends to leave more of a white cast, but I find that it’s more effective for sun protection. <br/> <br/>
                The easiest way to identify a physical sunscreen is to look for zinc oxide as an active ingredient. Titanium dioxide is also a common active ingredient in physical sunscreens, but it isn’t as effective on its own, so it should be combined with zinc oxide. Look for a sunscreen that has 15-20% zinc oxide and titanium dioxide, and SPF 50 or more.
            </p>
          </Col>
          <Col>
            <h3 className='title placeholder'>placeholder</h3>
            <div className='step-body'>
            Face sunscreen: Shiseido Urban Environment Oil-free UV Protector Broad Spectrum Face Sunscreen SPF 42
              <br /> <br />
              <div className='center'>
                <img src={shiseido.src} width={shiseido.width} />
              </div>
              <br /> <br />
            This Shiseido sunscreen isn’t as strong as I’d like in terms of zinc oxide and SPF, but it has a watery consistency that absorbs into the skin very easily and doesn’t leave any white cast or tacky feeling. It feels more like an essence than a sunscreen, so it’s a solid option for when you’re not going to be in the sun all day.
            </div>
          </Col>
        </Row>
        <Row className='step-bottom-row'>
          <Col>
            <div className='step-body'>
            Body sunscreen: Pipette Mineral Sunscreen SPF 50
              <br /> <br />
              This Pipette sunscreen has 20% zinc oxide and is also reef safe. It’s one of the few mineral body sunscreens that has a high zinc oxide content and is also fairly inexpensive.
              <br /> <br />
              <div className='center'>
                <img src={pipette.src} width={pipette.width} />
              </div>
            </div>
          </Col>
          <Col>
            <div className='step-body'>
            Alternative face sunscreen: Dr. Jart+ Every Sun Day Mineral Sunscreen SPF 50+
              <br /> <br />
              This sunscreen contains 15.6% zinc oxide and titanium dioxide (11.5% and 4.1%, respectively), so it’s a good option for when you need stronger sun protection.
              <div className='center'>
                <img src={drjart.src} width={drjart.width} />
              </div>
              <br /> <br />
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}