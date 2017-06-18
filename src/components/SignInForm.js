import React from 'react'
import firebase from 'firebase'

export default class SignInForm extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  handleSubmit = event => {
    event.preventDefault()
      firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(
      data => console.log('data: ', data)
    ).catch(
      error => console.log('error: ', error)
    )
  }

  render() {
    return (
      <div>
        <h4>Logowanie</h4>
        <form onSubmit={this.handleSubmit}>
          e-mail:
          <input
            type="text"
            value={this.state.email}
            name="email"
            onChange={this.handleChange}
          />
          <br/>
          password:
          <input
            type="password"
            value={this.state.password}
            name="password"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Zaloguj się</button>
        </form>
      </div>
    )
  }
}

