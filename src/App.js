import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './App.css';
import Login from './login'
import data from './database/productsBase.json'
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const BasicExample = () => (
    <Router>
        <div>
            <div style={{textAlign: 'right'}}>
                <ul style={{listStyle: 'none'}}>
                    <li><Link to="/LoginNoFB"><Login/></Link></li>
                    <li><Link to="/LoginNoFB">Zaloguj bez facebooka</Link></li>
                </ul>
            </div>
            <hr/>

            {/*<Route exact path="/Login" component={Login}/>*/}
            {/*<Route exact path="/LoginNoFB" component={Login}/>*/}

        </div>
    </Router>
)

class App extends Component {
  render() {
    return (
      <div>
          <BasicExample/>
          <div style={{width: '40%', margin: '0 auto', marginTop: '200px'}}>
              <Select/>
          </div>
      </div>
    );
  }
}

export default App;
