import React from 'react';
import firebase from 'firebase'

import './App.css'

const config = {
    apiKey: "AIzaSyBEsyoqvY955QsdrdbEpGIWvNNnvZ3PC0U",
    authDomain: "koty-app-login.firebaseapp.com",
    databaseURL: "https://koty-app-login.firebaseio.com",
    projectId: "koty-app-login",
    storageBucket: "",
    messagingSenderId: "364801817856"
};

const provider = new firebase.auth.FacebookAuthProvider();

firebase.initializeApp(config);


class logIn extends React.Component {

    state = {
        login: '',
        password: '',
        logged: '',
        passworded: '',
        user: ''
    }



    handleChange = event => this.setState({
        [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password).then(
            this.setState({
                user: firebase.auth().currentUser.email
            }))
    }

    handleLogin = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.logged, this.state.passworded).then(
            this.setState({
                user: firebase.auth().currentUser.email
            }))
    }

    facebookLogin = event => {
        event.preventDefault()
        firebase.auth().signInWithPopup(provider)
    }


    userLogged = () => {
        console.log("User jako cały:")
        console.log(firebase.auth().currentUser)
        console.log("User e-mail:")
        console.log(firebase.auth().currentUser.email)
        console.log("User e-mail w state")
        console.log(this.state.user)
    }

    loggingOut = () => {
        firebase.auth().signOut()
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: firebase.auth().currentUser.email
                });
            } else {
                console.log('Wylogowany')
            }
        });
    }


    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-4  center">
                    <div className="rejestracja">
                    <form>
                        <h4> ZAREJESTRUJ SIĘ </h4>
                        <input type="text" value={this.state.login} name="login" placeholder="Login"
                               onChange={this.handleChange}/>
                        <input type="password" value={this.state.password} name="password" placeholder="Haslo"
                               onChange={this.handleChange}/>
                        <button type="submit" onClick={this.handleSubmit}>Zarejestruj się</button>
                    </form>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-4 center">
                    <div className="logowanie">
                    <form>
                        <h4> ZALOGUJ SIĘ </h4>
                        <input type="text" value={this.state.logged} name="logged" placeholder="Login"
                               onChange={this.handleChange}/>
                        <input type="password" value={this.state.passworded} name="passworded" placeholder="Haslo"
                               onChange={this.handleChange}/>
                        <button type="submit" onClick={this.handleLogin}>Zaloguj się</button>
                    </form>
                </div>
                </div>

                <div className="col-xs-12 col-sm-4 center">
                    <div className="facebook">
                    <h4> ZALOGUJ PRZEZ FACEBOOKA </h4>
                    <button type="submit" onClick={this.facebookLogin}>Zaloguj przez facebooka</button>
                    <button onClick={this.loggingOut}>Wyloguj</button>
                    <button onClick={this.userLogged}>poka usera i jego email w konsoli</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default logIn