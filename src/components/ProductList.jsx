import { useState } from 'react'
import About from './About'
import Cart from './Cart'
import OneProduct from './OneProduct'
import { Routes, Route } from 'react-router-dom'

const ProductList = () => {
    const [cartProducts, setCartProducts] = useState([])

    function addToCart(item) {
        const tempCartProducts = [...cartProducts]

        const findSome = tempCartProducts.find(product =>
            product.name === item.name)

        if (findSome) {
            if (!item.countInStock) {
                console.log(`${item.name} Out of stock`)
                alert(`${item.name} Out of stock`)
                return
            }
            console.log(`${item.name} Already in cart, adding one more`)
            item.countInStock--
            item.count++
        } else {
            item.countInStock--
            item.count = 1
            tempCartProducts.push(item)
        }
        setCartProducts(tempCartProducts)
        console.log("Cart", cartProducts)
    }

    function clearCart() {
        cartProducts.forEach(product => {
            product.countInStock = product.countInStock + product.count
            product.count = 0
        })
        setCartProducts([])
    }
    function increaseQuantity(item) {
        if (item.countInStock > 0) {
            item.count++
            item.countInStock--
            const tempCartProducts = [...cartProducts]
            setCartProducts(tempCartProducts)
        } else { console.log("Out of stock") }
    }
    function decreaseQuantity(item) {
        if (item.count > 1) {
            item.count--
            item.countInStock++
            const tempCartProducts = [...cartProducts]
            setCartProducts(tempCartProducts)
        } else {
            console.log("Lets leave at least 1")
        }
    }


    function deleteProduct(item) {
        const tempCartProducts = [...cartProducts]
        item.countInStock = item.countInStock + item.count
        item.count = 0
        tempCartProducts.pop(item)
        setCartProducts(tempCartProducts)
        console.log("Removed ", item.name)
    }

    return (
        <Routes>
            <Route index element={<About />} />
            <Route path="products" element={<OneProduct addToCart={addToCart} />} />
            <Route path="cart" element={<Cart
                cartProducts={cartProducts}
                clearCart={clearCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                deleteProduct={deleteProduct} />} />
        </Routes>
    )
}

export default ProductList
