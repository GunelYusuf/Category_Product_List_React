import React, {Component} from 'react';
import './App.css';
import Navbar from  "./components/Navbar";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Container,Row,Col} from "reactstrap";


class App extends Component {
    
  state={currentCategory:"", products:[] };

   componentDidMount() {
       this.getProducts();
   }

    getProducts = (categoryId) => {
       let url ='http://localhost:3000/products';
       if (categoryId)
       {
           url += '?categoryId='+categoryId;
       }


      fetch(url)
          .then(response => response.json())
          .then(data => this.setState({products:data}));
    };

    changeCategory = category => {
        this.setState({currentCategory: category.categoryName});
        this.getProducts(category.id);
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
                            <ProductList products={this.state.products} currentCategory={this.state.currentCategory} info={productInfo}/>
                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;



