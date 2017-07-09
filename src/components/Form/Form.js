import React, { Component } from 'react';
import './Form.css';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
            // TODO: 1. Dodaj pole "userName"
            // Dodaj pustą tablice o nazwie "list"
        }
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    // TODO: 2. Dodaj metodę handleSend
    // połącz akcję z przyciskiem send

    // TODO: 3. Dodaj metodę handleKeyPress
    // dodaj wiadomości po naciśnięciu klawisza enter

    render() {
        return (
            <div className="form">
                <div className="form__message">

                    {/* TODO: 4. Wyświetl wszystkie wysłane wiadomości */}

                </div>
                <div className="form__row">
                    <input 
                        className="form__input"
                        type="text"
                        placeholder="Type message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
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