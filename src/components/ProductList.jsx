import About from './About'
import Cart from './Cart'
import OneProduct from './OneProduct'
import { Routes, Route } from 'react-router-dom'


const ProductList = () => {
    return (
            <Routes>
                <Route index element={<About />} />
                <Route path="products" element={<OneProduct />} />
                <Route path="cart" element={<Cart />} />
            </Routes>
    )
}

export default ProductList
