import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './App.css';
import Form from '../Form/Form.js';
import firebase from 'firebase';
import { firebaseConfig } from '../../config'

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
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
