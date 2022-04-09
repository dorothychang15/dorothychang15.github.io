import React from 'react';

import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';

import { Image } from './skincare/SkincareContent';

const images: Image[] = [
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/jiufen.JPG',
    caption: 'jiufen, taiwan',
  },
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/taiwan.jpg',
    caption: 'taichung, taiwan',
  },
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/kaohsiung.JPG',
    caption: 'kaohsiung, taiwan',
  },
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/tokyo.jpg',
    caption: 'tokyo, japan',
  },
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/otaru.JPG',
    caption: 'otaru, japan',
  },
  {
    src: 'https://github.com/dorothychang15/personal-website/raw/master/public/korea.JPG',
    caption: 'seoul, korea',
  }
];

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
            {
              images.map((image: Image) => (
                <Carousel.Item key={image.caption}>
                  <img
                    className="d-block w-100"
                    src={image.src}
                    alt={image.caption}
                  />
                  <Carousel.Caption>
                    <h3>{image.caption}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))
            }
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
}