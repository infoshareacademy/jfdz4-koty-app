import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import {
    Grid
} from 'react-bootstrap'



import Intro from './Intro'
import Products from './Search'
import ProductDetails from './ProductDetails'
import logIn from './logIn';
import startSearch from './startSearch'
import './App.css'
import List from './List'
import Navigation from './Navbar'


class App extends React.Component {

    render() {
        return (
            <Router>
                <Grid>
                   <Navigation/>

                    <div className="white">
                        <Route exact path="/" component={Intro}/>
                        <Route path="/logIn" component={logIn}/>
                        <Route path="/Search" component={Products}/>
                        <Route path="/startSearch" component={startSearch}/>
                        <Route path="/products/:productId" component={ProductDetails}/>
                        <Route path="/favorite" component={List}/>
                    </div>
                </Grid>
            </Router>)
    }
}


export default App