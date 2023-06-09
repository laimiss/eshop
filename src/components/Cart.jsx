import React from 'react'
import { Button, Table } from 'react-bootstrap'
const Cart = (props) => {
    const cartProducts = props.cartProducts
    function getTotal(products) {
        return products.reduce((sum, { price, count }) =>
            sum + price * count, 0).toFixed(2)
    }
    return (
        <Table className="mt-5" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts && cartProducts.map((product, index) => (
                    <tr key={product.name}>
                        <td>{index + 1}</td>
                        <td>{product.name}</td>
                        <td><Button onClick={
                            () => {
                                props.decreaseQuantity(product)
                            }
                        }>-</Button> {product.count}<Button onClick={
                            () => {
                                props.increaseQuantity(product)
                            }
                        }>+</Button></td>
                        <td>{product.price}</td>
                        <td><Button variant="danger" onClick={
                            () => props.deleteProduct(product)}>Remove</Button></td>
                    </tr>
                ))}
                <tr>
                    <td colSpan="3">Bendra suma: {getTotal(cartProducts)} €</td>
                    <td><Button variant="success" onClick={() => {
                        alert(`Reik susimokėti ${getTotal(cartProducts)}€`)
                    }}> Sumokėti</Button></td>
                    <td><Button variant="danger" onClick={() => props.clearCart()}> Reset</Button></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Cart
