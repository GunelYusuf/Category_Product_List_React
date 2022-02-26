import React, {Component} from 'react';
import './App.css';
import Navbar from  "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Container,Row,Col} from "reactstrap";


class App extends Component {
    
  state={currentCategory:""}

    changeCategory = category => {
        this.setState({currentCategory: category.categoryName});
    };
    render() {
        let categoryInfo={title:'Category List',test:'Special Categories'};
        let productInfo={title:'Product List'};
        return (
           <div className="App">
                <Container>
                    <Row>
                        <Navbar/>
                    </Row>
                    <Row>
                        <Col xs="3">
                            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
                        </Col>
                        <Col xs="9">
                            <ProductList currentCategory={this.state.currentCategory} info={productInfo}/>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;



