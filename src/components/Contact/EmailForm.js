import React, {Component} from 'react';
import axios from 'axios';

const validEmailTest = 
  RegExp(/^(([^<>()\],;:\s@]+([^<>()\],;:\s@]+)*)|(.+))@(([^<>()[,;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i);

class EmailForm extends Component {

    state = {
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        message: '',
        formErrors: {
            firstNameError: '',
            lastNameError: '',
            emailError: '',
            messageError: '',
        },
        formValid: false

    }

    formValid = (formErrors) => {
        let valid = true;

        Object.values(formErrors).forEach(value => {
            value.length > 0 && (valid = false)
        });

        return valid
    }

    onChangeHandler = (e) => {
        const {name, value} = e.target;
        // console.log("Name: " + name);
        // console.log("Value: " + value);
        
        let formErrors = this.state.formErrors;

        switch (name) {
            case 'firstName': {
                formErrors.firstNameError = value.length < 2 ?
                    'First Name must be at least 2 characters long' 
                    : '';
                break;
            }
            case 'lastName': {
                formErrors.lastNameError = value.length < 2 ?
                    'Last Name must be at least 2 characters long' 
                    : '';
                break;
            }
            case 'email': {
                formErrors.emailError = validEmailTest.test(value) ?
                    '' 
                    : 'Please enter a valid email';
                break;
            }
            case 'message': {
                formErrors.messageError = value.length < 10 ?
                    'Message must be at least 10 character long' 
                    : '';
                break;
            }
            default: {
                break;
            }
            
        }

        this.setState({
            [name]: value,
            formErrors,
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        console.log(this.state);

        const {firstName, lastName, email, subject, message} = this.state;

        if (this.formValid(this.state.formErrors)) {
            this.setState({formValid: true})
            console.log("Submitted")

            const form = await axios.post('/api/form', {
                firstName,
                lastName,
                email,
                subject,
                message
            })
        }
        else {
            this.setState({formValid: false})
            console.error("Invalid")
        }
    }
    
    render() {
        const {formErrors} = this.state;
        return (
            <div className="container">
                <form onSubmit={this.onSubmit} noValidate>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" placeholder="First Name" name="firstName" value={this.state.firstName} onChange={this.onChangeHandler} noValidate/>
                            {!this.state.formValid && 
                                <span className='error'>{formErrors.firstNameError}</span>
                            }
                            <label htmlFor="firstName">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" placeholder="Last Name" name="lastName" value={this.state.lastName} onChange={this.onChangeHandler} noValidate/>
                            {!this.state.formValid && 
                                <span className='error'>{formErrors.lastNameError}</span>
                            }
                            <label htmlFor="lastName">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input type="text" placeholder="Email" name="email" value={this.state.email} onChange={this.onChangeHandler} noValidate/>
                            {!this.state.formValid && 
                                <span className='error'>{formErrors.emailError}</span>
                            }
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s6">
                            <input type="text" placeholder="Subject" name="subject" value={this.state.subject} onChange={this.onChangeHandler} noValidate/>
                            <label htmlFor="subject">Subject</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea name="message" className="materialize-textarea" placeholder="Message" value={this.state.message} onChange={this.onChangeHandler} noValidate></textarea>
                            {!this.state.formValid && 
                                <span className='error'>{formErrors.messageError}</span>
                            }
                            <label htmlFor="message">Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <button className="btn waves-effect waves-light" type="submit" name="action">Send
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EmailForm;