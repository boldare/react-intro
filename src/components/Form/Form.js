import React, { Component } from 'react';
import './Form.css';
import firebase from 'firebase';

export default class Form extends Component {
    // TODO: 3. Dodaj konstruktor ze zmienną "message"

    // TODO: 4. Dodaj metodę "handleChange"
    render() {
        return (
            <div className="form">
                <div className="form__message">
                    {/*
                        TODO: 6. Wyświetl wartość zmiennej message
                    */}
                </div>
                <div className="form__row">
                    {/* 
                        TODO: 5. Połącz metodę "handleChange"
                        z polem tekstowym
                    */}
                    <input 
                        className="form__input"
                        type="text"
                        placeholder="Type message"
                        value={this.state.message}
                    />
                    <button 
                        className="form__button"
                    >
                        send
                    </button>
                </div>
            </div>
        );
    }
}