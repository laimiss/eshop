import React from 'react'
import { Carousel } from 'react-bootstrap'
import data from '../data/products'

const About = () => {
  // console.log(data)
  return (
    <Carousel variant="dark">
      { data.map((OneProduct,index)=>(


        <Carousel.Item key={index}>
          <img
            className='d-block w-100'
            src={OneProduct.imageUrl}
            alt={OneProduct.name}
            />
            <Carousel.Caption>
              <h5>{OneProduct.name}</h5>
              <p>Akcija: {OneProduct.price} €</p>
            </Carousel.Caption>
        </Carousel.Item>
            ))
      }
    </Carousel>
  )
}

export default About
