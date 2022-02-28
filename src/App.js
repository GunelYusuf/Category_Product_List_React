import React, {Component} from 'react';
import './App.css';
import Navi from "./components/Navi";
import CategoryList from "./components/CategoryList";
import ProductList from "./components/ProductList";
import {Container,Row,Col} from "reactstrap";


class App extends Component {
    
  state={currentCategory:"", products:[], cart:[] };

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

    addToCart= (product) =>{
      let newCart= this.state.cart;
      var addedProduct= newCart.find(p => p.product.id===product.id);
      if (addedProduct)
      {
          addedProduct.quantity+=1;
      }
      else
      {
          newCart.push({product:product,quantity:1});
      }
        this.setState({cart:newCart});
    }

    removeFromCart=(product)=>{
        let currentCart=this.state.cart.filter(p => p.product.id !== product.id)
        this.setState({cart:currentCart})
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
                            <ProductList
                                products={this.state.products}
                                currentCategory={this.state.currentCategory}
                                info={productInfo}
                                addToCart={this.addToCart}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;



