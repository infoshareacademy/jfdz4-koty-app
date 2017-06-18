import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {
    Nav,
    NavItem,
} from 'react-bootstrap'
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'

import Products from './Search'
import MyComponent from './logIn';
import './App.css'


const App = () => (
    <Router>
        <Nav>
            <IndexLinkContainer to="/">
                <NavItem>Home</NavItem>
            </IndexLinkContainer>

            <LinkContainer to="/logIn">
                <NavItem>Logowanie</NavItem>
            </LinkContainer>

            <LinkContainer to="/Search">
                <NavItem>Wyszukiwarka</NavItem>
            </LinkContainer>


            <Route path="/logIn" component={MyComponent}/>
            <Route path="/Search" component={Products}/>

        </Nav>
    </Router>
)
export default App