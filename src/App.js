import logo from './logo.svg';
import './App.css';

import Navbar from  "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Col, Container, Row} from "reactstrap";

function App() {
    let titleCategory='Category List'
    let titleProduct='Product List'
  return (
    <div className="App">
        <Container>
            <Row>
               <Navbar/>
            </Row>
            <Row>
                <Col xs="3">
                    <CategoryList title={titleCategory}/>
                </Col>
                <Col xs="9">
                    <ProductList title={titleProduct}/>
                </Col>

            </Row>
        </Container>
   </div>
  );
}

export default App;
