import React from 'react';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'
import Products from './Search'
import MyComponent from './logIn';


export default class extends React.Component {
    render() {
        return (
            <div>
             <MyComponent/>

            <Products/>
            </div>
        )
    }
}


