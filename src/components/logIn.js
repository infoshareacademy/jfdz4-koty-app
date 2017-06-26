import React from 'react';
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBEsyoqvY955QsdrdbEpGIWvNNnvZ3PC0U",
    authDomain: "koty-app-login.firebaseapp.com",
    databaseURL: "https://koty-app-login.firebaseio.com",
    projectId: "koty-app-login",
    storageBucket: "",
    messagingSenderId: "364801817856"
};

firebase.initializeApp(config);

class logIn extends React.Component {

    state = {
        login: '',
        password: '',
        logged: '',
        passworded: ''
    }

    handleChange = event => this.setState({
            [event.target.name]: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password)
    }

    handleLogin = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.logged, this.state.passworded)
    }

    render() {
        return (
            <div>

                <form>
                    <input type="text" value={this.state.login} name="login" placeholder="Login" onChange={this.handleChange} />
                    <input type="password" value={this.state.password} name="password" placeholder="Haslo" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleSubmit}>Zarejestruj się</button>
                </form>

                <form>
                    <input type="text" value={this.state.logged} name="logged" placeholder="Login" onChange={this.handleChange} />
                    <input type="password" value={this.state.passworded} name="passworded" placeholder="Haslo" onChange={this.handleChange} />
                    <button type="submit" onClick={this.handleLogin}>Zaloguj się</button>
                </form>

            </div>
        )
    }
}

export default logIn