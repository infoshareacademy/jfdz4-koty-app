import React from 'react';
import firebase from 'firebase'
import toastr from 'toastr'

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
        firebase.auth().createUserWithEmailAndPassword(this.state.login, this.state.password).catch(function(error) {
            toastr.error('Ten email jest już używany');
        }).then(
            this.setState({
                user: firebase.auth().currentUser.email
            }))
    }

    handleLogin = event => {
        event.preventDefault()
        firebase.auth().signInWithEmailAndPassword(this.state.logged, this.state.passworded).catch(function(error) {
            toastr.error('Błędny login lub hasło')
        }).then(
            this.setState({
                user: firebase.auth().currentUser.email
            }))
    }

    facebookLogin = event => {
        event.preventDefault()
        firebase.auth().signInWithPopup(provider)
    }


    userLogged = () => {
        toastr.success('zalogowano jako ' + this.state.user)
    }

    loggingOut = () => {
        firebase.auth().signOut().then(this.setState({
            user: ''
        }))
        toastr.success('Wylogowano poprawnie')
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: firebase.auth().currentUser.email
                });
                toastr.success('Zalogowano poprawnie ' + this.state.user)
            } else {
               toastr.warning('Musisz się zalogować aby korzystać z wyszukiwarki')
            }
        });
    }


    render() {
        return (
            this.state.user === "" ?
            <div className="row">
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
                    <button type="submit" onClick={this.facebookLogin}>Logowanie</button>
                    </div>
                </div>
            </div> :
                <div>
                <p>Uzytkownik zalogowany jako {this.state.user} </p>
                <button onClick={this.loggingOut}>Wyloguj</button>
                </div>
        )
    }
}

export default logIn