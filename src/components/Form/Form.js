import React, { Component } from 'react';
import './Form.css';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: 'Sebastian',
            message: '',
            list: [],
        }
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

    render() {
        return (
            <div className="form">
                <div className="form__message">
                    {/* 
                        TODO: Utwórz nowy komponent "Message"
                        Dokonaj zmian w wyświetlaniu listy wiadomości.
                     */}
                    { this.state.list.map((item, index) =>
                        <div 
                            key={index}
                            className="form__item"
                        >
                            <span className="form__user">
                                { item.userName }:
                            </span>                                
                            { item.message }
                        </div>
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