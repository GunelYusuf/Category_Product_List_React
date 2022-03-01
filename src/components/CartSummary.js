import React, {Component} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown, Badge, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

class CartSummary extends Component {
    renderSummary(){
        return(
            <UncontrolledDropdown
                inNavbar
                nav
            >
                <DropdownToggle
                    caret
                    nav
                >
                    Your Cart - {this.props.cart.length}
                </DropdownToggle>
                <DropdownMenu >
                    {this.props.cart.map(cartItem => (
                        <DropdownItem key={cartItem.product.id}>
                            <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>remove</Badge>
                            {cartItem.product.productName}
                            <Badge color="success">{cartItem.quantity}</Badge>
                        </DropdownItem>

                    ) )}
                    <DropdownItem divider />
                    <DropdownItem>
                       <Link to="cart"> Go to Basket</Link>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

   renderEmptyCart(){
        return(
            <NavItem>
                <NavLink>Empty Basket</NavLink>
            </NavItem>
        )
   }
    render() {
        return (
            <div>
                {this.props.cart.length>0? this.renderSummary() : this.renderEmptyCart()}
            </div>
        );
    }
}

export default CartSummary;