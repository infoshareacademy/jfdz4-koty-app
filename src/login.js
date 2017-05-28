import React from 'react'

import FacebookLogin from 'react-facebook-login'

const responseFacebook = (response) => {
    console.log(response);
}

function Login (){
    return (
    <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={null}
        callback={responseFacebook}
        cssClass="my-facebook-button-class"
        icon="fa-facebook"/>
)}




export default Login