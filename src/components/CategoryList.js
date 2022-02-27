import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';


class CategoryList extends Component {
    state = {
            categories: []
        };

    componentDidMount() {
        this.getCategory();
    }

    getCategory = () => {
             fetch('http://localhost:3000/categories')
            .then(response => response.json())
            .then(data => this.setState({categories:data}));
           }

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                {/*<h4>{this.props.info.test}</h4>*/}
                  <ListGroup>
                      {this.state.categories.map(category =>
                          <ListGroupItem active={category.categoryName===this.props.currentCategory? true : false}
                            onClick={() => this.props.changeCategory(category)}
                            key={category.id}
                          >
                         {category.categoryName}
                          </ListGroupItem>)}
                      {/*<h4>{this.props.currentCategory}</h4>*/}
                 </ListGroup>
           </div>
        );
    }
}

export default CategoryList;