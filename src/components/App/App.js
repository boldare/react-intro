import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import firebase from 'firebase';
import { firebaseConfig } from '../../config'
// TODO: 1. Zaimportuj komponent "Form"

firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <img src={logo} className="app__logo" alt="logo" />
          <h2>
            SIMPLE APP WITH REACT
          </h2>
        </div>
        <div className="app__list">
          {/* TODO: 2. Wyświetl komponent "Form" */}
        </div>
      </div>
    );
  }
}

export default App;
