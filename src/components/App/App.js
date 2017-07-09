import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import { firebaseConfig } from '../../config'

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    // TODO: 1. Dodaj konstruktor ze zmienną user

    // TODO: 2. Dodaj metodę componentDidMount,
    // sprawdź czy uzytkownik jest zalogowany
    
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>
            SIMPLE APP WITH REACT
          </h2>

          {/* TODO: 3. Dodaj button logowania */}

          {/* TODO: 4. Dodaj button wylogowania */}

          {/* TODO: 5. Zastosuj dla buttonów renderowanie warunkowe */}

        </div>
        <div className="app__list">
          
          {/* TODO: 6. Przekaż zmienną user do koponentu */}
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
