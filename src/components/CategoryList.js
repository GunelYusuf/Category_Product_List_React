import React, {Component} from 'react';
import {ListGroup,ListGroupItem} from 'reactstrap';

class CategoryList extends Component {
    constructor(props) {
        super(props);
        state:{}
    }
    render() {
        return (
            <div>
                <h2>{this.props.info.title}</h2>
                <h4>{this.props.info.test}</h4>
                  <ListGroup>
                        <ListGroupItem
                            action
                            active
                            tag="button"
                        >
                            Cras justo odio
                        </ListGroupItem>
                        <ListGroupItem
                            action
                            tag="button"
                        >
                            Dapibus ac facilisis in
                        </ListGroupItem>
                        <ListGroupItem
                            action
                            tag="button"
                        >
                            Morbi leo risus
                        </ListGroupItem>
                        <ListGroupItem
                            action
                            tag="button"
                        >
                            Porta ac consectetur ac
                        </ListGroupItem>
                        <ListGroupItem
                            action
                            disabled
                            tag="button"
                        >
                            Vestibulum at eros
                        </ListGroupItem>
                    </ListGroup>
            </div>
        );
    }
}

export default CategoryList;