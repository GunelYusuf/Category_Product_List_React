import React, {Component} from 'react';
import  {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText } from 'reactstrap';
import CartSummary from "./CartSummary";
import {Link} from 'react-router-dom';


class Navi extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
     }
       toggle(){
            this.setState({
                isOpen: !this.state.isOpen
            });
        }

    render() {
        return (
            <div>
                 <Navbar
                    color="light"
                    expand="md"
                    light
                >
                    <NavbarBrand href="/">
                      Northwind App
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                              <NavLink>
                                  <Link to="/form">
                                      Form Demo 1
                                  </Link>
                              </NavLink>

                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/form2">
                                        Form Demo 2
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">
                                    GitHub
                                </NavLink>
                            </NavItem>
                           <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
                        </Nav>
                        <NavbarText>
                            Simple Text
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Navi;



