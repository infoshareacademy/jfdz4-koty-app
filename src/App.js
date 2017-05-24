import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import LogIn from './login'
import SearchInput from './search-input-head-contects'

class App extends Component {
  render() {
    return (
      <div>
        <SearchInput userName="znajdz to czego szukasz..." message="Znajdz najtańszy produkt"/>
        <BasicExample/>
      </div>
    );
  }
}



const BasicExample = () => (
    <Router>
      <div>
        <ul>
           <li><Link to="/LogIn">Zaloguj się</Link></li>
        </ul>

        <hr/>

        <Route exact path="/LogIn" component={LogIn}/>

      </div>
    </Router>
)

export default App;
