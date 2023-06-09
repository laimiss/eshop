import { Container } from 'react-bootstrap'
import Header from './components/Header'
import ProductList from './components/ProductList'
import { HashRouter as Router } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <Container>
                <Header />
                <ProductList />
            </Container>
        </Router>
    )
}

export default App
