import logo from './logo.svg';
import './App.css';

import Navbar from  "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {
    let categoryInfo={title:'Category List',test:'Special Categories'}
    let productInfo={title:'Product List'}
  return (
    <div className="App">
        <Container>
            <Row>
               <Navbar/>
            </Row>
            <Row>
                <Col xs="3">
                    <CategoryList info={categoryInfo} />
                </Col>
                <Col xs="9">
                    <ProductList info={productInfo}/>
                </Col>

            </Row>
        </Container>
   </div>
  );
}

export default App;
