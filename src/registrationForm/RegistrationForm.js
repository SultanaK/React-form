import React, { Component } from 'react'

export default class RegistrationForm extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            password: {
                value: ''
            },
            repeatPassword: {
                value: ''
            }
        } 
    }
    render() {

        const handleSubmit = (event) => {
            event.preventDefault();
           // const { name, password, repeatPassword } = this.state;
            

        }
        
        updateName(name) {
            this.setState({ name: { value: name } });
        }

        updatePassword(password) {
            this.setState({ password: { value: password } });
        }

        updateRepeatPassword(repeatPassword) {
            this.setState({ repeatPassword: { value: repeatPassword } });
        }

        return (
            
                
            <form className="registration" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <div className="registration__hint">* required field</div>
                <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input type="text" className="registration__control"
                        name="name" id="name" onChange={event => this.updateName(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <input type="password" className="registration__control"
                        name="password" id="password" onChange={event => this.updatePassword(event.target.value)}  />
                    <div className="registration__hint">6 to 72 characters, must include a number</div>
                </div>
                <div className="form-group">
                    <label htmlFor="repeatPassword">Repeat Password *</label>
                    <input type="password" className="registration__control"
                        name="repeatPassword" id="repeatPassword" onChange={event => this.updateRepeatPassword(event.target.value)}/>
                </div>

                <div className="registration__button__group">
                    <button type="reset" className="registration__button">
                        Cancel
        </button>
                    <button type="submit" className="registration__button">
                        Save
        </button>
                </div>
            </form>
        )
    }
}



