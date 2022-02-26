import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';


class CategoryList extends Component {
    state = {
            categories: [
                {categoryId: 1, categoryName:'Beverages'},
                {categoryId: 2, categoryName:'Condiments'},
                {categoryId: 3, categoryName:'Clothes'}
            ]

        };

    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                {/*<h4>{this.props.info.test}</h4>*/}
                  <ListGroup>
                      {this.state.categories.map(category =>
                          <ListGroupItem
                            onClick={()=>this.props.changeCategory(category)}
                            key={category.categoryId}
                          >
                         {category.categoryName}
                          </ListGroupItem>)}
                      <h4>{this.props.currentCategory}</h4>
                 </ListGroup>
           </div>
        );
    }
}

export default CategoryList;