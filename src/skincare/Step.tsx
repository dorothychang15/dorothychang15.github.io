import React from 'react';

import { StepConfig } from './SkincareContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Step({
  title, body, recs, imgs,
}: StepConfig) {
  return (
    <div className='step'>
      <Container>
        <Row>
          <Col>
            <h3 className='title'>{title}</h3>
            <p className='step-body'>{body}</p>
          </Col>
          <Col>
            <div className='step-col'>
              <div className='center'>
                {imgs?.map(img => (
                  <img key={img.src} src={img.src} width={img.width} height={img.height} />
                ))}
              </div>
              <div className='step-body'>
                {recs.map(rec => (
                  <div key={rec} className='step-rec'>{rec} <br /></div>
                ))}
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}