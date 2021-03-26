import React from 'react'
import '../../css/custom.scss'
import Carousel from 'react-bootstrap/Carousel'

const CarouselComp = () => (
<Carousel id='carouselExampleIndicators'>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src=""
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src=""
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 CPic"
      src=""
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
)

export default CarouselComp