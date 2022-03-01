import React, {Component} from 'react';
import './App.css';
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Container,Row,Col} from "reactstrap";
import alertify from 'alertifyjs'
import { Routes, Route } from "react-router-dom"
import CartList from "./components/CartList";
import NotFound from "./components/NotFound";
import FormDemo1 from "./components/FormDemo1";
import FormDemo2 from "./components/FormDemo2";


class App extends Component {
    
  state={currentCategory:"", products:[], cart:[] };

   componentDidMount() {
       this.getProducts();
   }

    getProducts = (categoryId) => {
       let url ='http://localhost:3004/products';
       if (categoryId)
       {
           url += '?categoryId='+categoryId;
       }
          fetch(url)
          .then(response => response.json())
          .then(data => this.setState({products:data}));
    };

    addToCart= (product) =>{
      let newCart= this.state.cart;
      let addedProduct= newCart.find(p => p.product.id===product.id);
      if (addedProduct)
      {
          addedProduct.quantity+=1;
      }
      else
      {
          newCart.push({product:product,quantity:1});
      }
        this.setState({cart:newCart});
        alertify.success(`${product.productName}-Succes Sale!`);
    }

    removeFromCart=(product)=>{
        let currentCart=this.state.cart.filter(p => p.product.id !== product.id)
        this.setState({cart:currentCart})
        alertify.error(`${product.productName}-Remove from Basket`);
    }


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
                   <Navi removeFromCart={this.removeFromCart} cart={this.state.cart}/>
                    <Row>
                        <Col xs="3">
                            <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
                        </Col>

                        <Col xs="9">
                            <Routes>
                                <Route exact  path="/" element = {
                                     <ProductList
                                          products={this.state.products}
                                          currentCategory={this.state.currentCategory}
                                          info={productInfo}
                                          addToCart={this.addToCart}
                                     /> }
                                />

                                    <Route exact path="/cart" element = {
                                        <CartList
                                            cart={this.state.cart}
                                            removeFromCart={this.removeFromCart}
                                        /> }
                                    />
                                    <Route path="form" element={<FormDemo1/>}/>
                                    <Route path="form2" element={<FormDemo2/>}/>
                                    <Route path="*" element={<NotFound/>}/>
                           </Routes>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;



