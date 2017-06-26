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
import MyComponent from './logIn'
import SignUpForm from './SignUp'
import './App.css'


const App = () => (
    <Router>
        <Grid>
            <Navbar>
                <Nav>
                    <IndexLinkContainer to="/">
                        <NavItem>Home</NavItem>
                    </IndexLinkContainer>

                    <LinkContainer to="/Search">
                        <NavItem>Szukaj produktów!</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/logIn">
                        <NavItem>Zaloguj się</NavItem>
                    </LinkContainer>

                    <LinkContainer to="/SignUp">
                    <NavItem>Załóż konto</NavItem>
                    </LinkContainer>


                </Nav>
            </Navbar>


            <Route path="/SignUp" component={SignUp}/>
            <Route exact path="/Search" component={Products}/>
            <Route path="/Search/:productId" component={ProductDetails}/>
        </Grid>
    </Router>
)
export default App