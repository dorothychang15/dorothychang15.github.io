import React from 'react';
import { useSpring, animated } from 'react-spring';

import ListGroup from 'react-bootstrap/ListGroup';

import Nav from '../Nav';
import Step from '../skincare/Step';
import { StepConfig } from '../types';
import { makeupContent } from './MakeupContent';

export default function Makeup() {
  const dayStyle = useSpring({
    from: { color: 'steelblue' },
    to: [{ color: 'plum' }, { color: 'steelblue' }],
    config: { duration: 5000 },
    loop: true,
  });
  const nightStyle = useSpring({
    from: { color: 'lightseagreen' },
    to: [{ color: 'moccasin' }, { color: 'lightseagreen' }],
    config: { duration: 5000 },
    loop: true,
  });
  return ( 
    <div>
      <Nav activeTab="makeup" />
      <div className="skincare-container">
        <div className="skincare-inner-container">
          <div>
            <div className="skincare-header title">
              <h2>face makeup</h2>
              &nbsp;
              <animated.div style={dayStyle}><h2>☁</h2></animated.div>
            </div>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">primer</ListGroup.Item>
              <ListGroup.Item as="li">concealer</ListGroup.Item>
              <ListGroup.Item as="li">foundation</ListGroup.Item>
              <ListGroup.Item as="li">liquid/cream bronzer/blush</ListGroup.Item>
              <ListGroup.Item as="li">setting powder</ListGroup.Item>
              <ListGroup.Item as="li">powder bronze/blush</ListGroup.Item>
              <ListGroup.Item as="li">highlighter</ListGroup.Item>
              <ListGroup.Item as="li">setting spray</ListGroup.Item>
            </ListGroup>
          </div>
          <div>
            <div className="skincare-header title">
              <h2 >eye makeup</h2>
              &nbsp;
              <animated.div style={nightStyle}><h2>☂</h2></animated.div>
            </div>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">brows</ListGroup.Item>
              <ListGroup.Item as="li">eyelid primer</ListGroup.Item>
              <ListGroup.Item as="li">eyeshadow</ListGroup.Item>
              <ListGroup.Item as="li">eyeliner</ListGroup.Item>
              <ListGroup.Item as="li">curl lashes</ListGroup.Item>
              <ListGroup.Item as="li">masacara primer</ListGroup.Item>
              <ListGroup.Item as="li">mascara</ListGroup.Item>
            </ListGroup>
          </div>
          
        </div>
        <div>
          {makeupContent.map((content: StepConfig) => (
            <Step key={content.title} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}