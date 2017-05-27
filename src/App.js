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
          <BasicExample/>
        <SearchInput userName="znajdz to czego szukasz..." message="Znajdz najtańszy produkt"/>

      </div>
    );
  }
}



const BasicExample = () => (
    <Router>
      <div>
        <ul style={{float : 'right'}}>
           <li><Link to="/LogIn">Zaloguj się</Link></li>
        </ul>
          <hr style={{width : '100%'}}/>

        <Route exact path="/LogIn" component={LogIn}/>

      </div>
    </Router>
)

export default App;
