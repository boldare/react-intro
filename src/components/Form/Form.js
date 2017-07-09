import React, { Component } from 'react';
import './Form.css';
import Message from '../Message/Message';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'Sebastian',
            message: '',
            list: [],
        }
        
        // TODO: 1. Dodanie referencji do bazy danych

        // TODO: 4. Wywołaj metodę listenMessages
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    handleSend() {
        if (this.state.message) {
            var newItem = {
                userName: this.state.userName,
                message: this.state.message,
            }

            // TODO: 2. Dodanie wiadomości do bazy danych
            // zmiana logiki dodawania wiadomości

            this.setState({ 
                message: '',
                list: [...this.state.list, newItem],
            });
        }
    }

    handleKeyPress(event) {
        if (event.key !== 'Enter') return;
        this.handleSend();
    }

    // TODO: 3. Dodaj metodę listenMessages

    render() {
        return (
            <div className="form">
                <div className="form__message">
                    { this.state.list.map((item, index) =>
                        <Message key={index} message={item} />
                    )}
                </div>
                <div className="form__row">
                    <input 
                        className="form__input"
                        type="text"
                        placeholder="Type message"
                        value={this.state.message}
                        onChange={this.handleChange.bind(this)}
                        onKeyPress={this.handleKeyPress.bind(this)}
                    />
                    <button 
                        className="form__button"
                        onClick={this.handleSend.bind(this)}
                    >
                        send
                    </button>
                </div>
            </div>
        );
    }
}