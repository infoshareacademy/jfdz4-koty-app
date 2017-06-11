import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import Products from './components/Products'

export default class App extends React.Component {
    render() {
        return (
            <div>
            <Products/>
            </div>
        )
    }
}


