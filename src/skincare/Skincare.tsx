import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';
import { useSpring, animated } from 'react-spring';

import Nav from '../Nav';
import { skincareContent, StepConfig } from './SkincareContent';
import Step from './Step';
import Suncare from './Suncare';

export default function Skincare() {
  const dayStyle = useSpring({
    from: { color: 'lightcoral' },
    to: [{ color: 'yellow' }, { color: 'lightcoral' }],
    config: { duration: 5000 },
    loop: true,
  });
  const nightStyle = useSpring({
    from: { color: 'lightblue' },
    to: [{ color: 'pink' }, { color: 'lightblue' }],
    config: { duration: 5000 },
    loop: true,
  });
  return ( 
    <div>
      <Nav activeTab="skincare" />
      <div className="skincare-container">
        <div className="skincare-inner-container">
          <div>
            <div className="skincare-header title">
              <h2>daytime</h2>
              &nbsp;
              <animated.div className="rain" style={dayStyle}><h2>☀</h2></animated.div>
            </div>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">cleanser</ListGroup.Item>
              <ListGroup.Item as="li">toner/essence</ListGroup.Item>
              <ListGroup.Item as="li">serum</ListGroup.Item>
              <ListGroup.Item as="li">eye cream</ListGroup.Item>
              <ListGroup.Item as="li">moisturizer</ListGroup.Item>
              <ListGroup.Item as="li">sunscreen</ListGroup.Item>
            </ListGroup>
          </div>
          <div>
            <div className="skincare-header title">
              <h2 >nighttime</h2>
              &nbsp;
              <animated.div className="rain" style={nightStyle}><h2>☾</h2></animated.div>
            </div>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">remove makeup</ListGroup.Item>
              <ListGroup.Item as="li">cleanser</ListGroup.Item>
              <ListGroup.Item as="li">toner/essence</ListGroup.Item>
              <ListGroup.Item as="li">serum</ListGroup.Item>
              <ListGroup.Item as="li">eye cream</ListGroup.Item>
              <ListGroup.Item as="li">moisturizer</ListGroup.Item>
              <ListGroup.Item as="li">overnight mask</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
        <div>
          {skincareContent.map((content: StepConfig) => (
            <Step key={content.title} {...content} />
          ))}
          <Suncare />
        </div>
      </div>
    </div>
  );
}