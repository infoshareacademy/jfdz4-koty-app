import React from 'react'
import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import firebase from 'firebase'
// import {
//     BrowserRouter as Router,
//     Route,
//     Link
// } from 'react-router-dom'


import Products from './Search'
import MyComponent from './FacebooklogIn';


export default class extends React.Component {
    render() {
        return (
            <div>
                <MyComponent/>
                <SignUpForm/>
                <SignInForm/>
                        
                 <Products/>
                </div>
                )
    }
}


