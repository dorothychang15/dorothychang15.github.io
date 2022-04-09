import React from 'react';

import { Content } from './SkincareContent';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Step({
  title, body, recs, imgs,
}: Content) {
  return (
    <div className='step'>
      <Container>
        <Row>
          <Col>
            <h3>{title}</h3>
            <p className='step-body'>{body}</p>
            <div className='step-body'>
              {recs.map(rec => (
                <div key={rec} className='step-rec'>{rec} <br /></div>
              ))}
            </div>
          </Col>
          <Col>
            <div className='step-col'>
              {imgs?.map(img => (
                <img key={img.src} src={img.src} width={img.width} height={img.height} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}