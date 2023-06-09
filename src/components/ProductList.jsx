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
            item.countInStock = item.countInStock - 1
            item.count = item.count + 1
        } else {
            item.countInStock = item.countInStock - 1
            item.count = 1
            tempCartProducts.push(item)
        }
        setCartProducts(tempCartProducts)
        console.log("Cart", cartProducts)
    }

    function clearCart() {
        cartProducts.forEach(product=>{
            product.countInStock = product.countInStock + product.count
            product.count = 0
        })
        setCartProducts([])
    }
    function increaseQuantity(item) {
        if(item.countInStock > 0){
            item.count = item.count + 1
            item.countInStock = item.countInStock - 1
            const tempCartProducts = [...cartProducts]
            setCartProducts(tempCartProducts)
        }
     }
    function decreaseQuantity(item) {
        if (item.count > 1) {
            item.count = item.count - 1
            item.countInStock = item.countInStock + 1
            const tempCartProducts = [...cartProducts]
            setCartProducts(tempCartProducts)
        } else {
            console.log("Lets leave at least 1")
        }

    }


    function deleteProduct(item) {
        console.log("Remove ", item.name)
        const tempCartProducts = [...cartProducts]

        const findSome = tempCartProducts.find(product =>
            product.name === item.name)
        if (findSome) {
            findSome.countInStock = findSome.count
            findSome.count = 0
            tempCartProducts.pop(findSome)
        }
        setCartProducts(tempCartProducts)
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
