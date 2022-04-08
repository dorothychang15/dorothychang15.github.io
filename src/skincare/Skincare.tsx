import React from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import Nav from '../Nav';
import { skincareContent, Content } from './SkincareContent';
import Step from './Step';

export default function Skincare() {
  return ( 
    <div>
      <Nav activeTab="skincare" />
      <div className="skincare-container">
        <div className="skincare-inner-container">
          <div>
            <h2>daytime ☀</h2>
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
            <h2>nighttime ☾</h2>
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
          {skincareContent.map((content: Content) => (
            <Step key={content.title} {...content} />
          ))}
        </div>
      </div>
    </div>
  );
}