import { Container } from 'react-bootstrap'
import Header from './components/Header'
import About from './components/About'
import ProductList from './components/ProductList'

const App = () => {
    return (
        <Container>
            <Header />
            <About />
            <ProductList/>
        </Container>
    )
}

export default App
