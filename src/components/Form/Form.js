import React, { Component } from 'react';
import './Form.css';
import firebase from 'firebase';

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <div className="form">
                <div className="form__message">
                    { this.state.message }
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