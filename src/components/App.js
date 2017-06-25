import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Nav,
    Grid,
    Navbar,
    NavItem,
} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

import Products from './Search'
import ProductDetails from './ProductDetails'
import MyComponent from './logIn';
import './App.css'

const App = () => (
    <Router>
        <Grid>
            <Navbar fluid inverse>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem>LOGO KOTÓW</NavItem>
                    </IndexLinkContainer>

                    <LinkContainer to="/Search">
                        <NavItem>Szukaj produktów!</NavItem>
                    </LinkContainer>
                </Nav>
                <Nav pullRight>
                    <LinkContainer to="/logIn">
                        <NavItem>Zaloguj się</NavItem>
                    </LinkContainer>
                </Nav>
            </Navbar>


            <Route path="/logIn" component={MyComponent}/>
            <Route path="/Search" component={Products}/>
            <Route path="/products/:productId" component={ProductDetails}/>
        </Grid>
    </Router>
)
export default App