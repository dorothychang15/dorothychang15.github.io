import React from 'react';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

export default function ImageCarouselModal() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [index, setIndex] = React.useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  
  return (
    <>
      <Button variant="outline-secondary" onClick={handleShow}>
          see where i've been
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>recent travels</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://github.com/dorothychang15/personal-website/raw/master/public/japan.png"
                alt="japan"
              />
              <Carousel.Caption>
                <h3>hokkaido, japan</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://github.com/dorothychang15/personal-website/raw/master/public/taiwan.jpg"
                alt="taiwan"
              />
              <Carousel.Caption>
                <h3>taichung, taiwan</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://github.com/dorothychang15/personal-website/raw/master/public/seattle.jpg"
                alt="seattle"
              />
              <Carousel.Caption>
                <h3>mt rainier, wa</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}