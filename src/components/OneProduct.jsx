import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

import products from '../data/products'

const OneProduct = ({ addToCart }) => {
    return (
        <Container className='mt-5 gap-3 d-flex justify-content-center flex-wrap'>
            {
                products.map((product, index) => (
                    <Card style={{ width: '18rem' }} key={index}>
                        <Card.Img variant="top" src={product.imageUrl} />
                        <Card.Body>
                            <Card.Title> {product.name}</Card.Title>
                            <Card.Text> {product.description}</Card.Text>
                            <Card.Text> {product.price} €</Card.Text>
                            <Button variant="primary" onClick={
                                () => addToCart(product)}>Buy</Button>
                        </Card.Body>
                    </Card>

                ))
            }

        </Container>
    )
}

export default OneProduct
