import React, { Component } from 'react';
import validate from './validator';
import Button from '../components/button';
import './contact.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loc: props.loc,
      action: props.action,
      formIsValid: false,
      formFields: {
        fname: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true
          }
        },
        email: {
          value :'',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true,
            isEmail: true
          }
        },
        message: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            isRequired: true
          }
        }
      }
    }
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updatedForm = {
      ...this.state.formFields
    }

    const updatedFormInput = {
      ...updatedForm[name]
    }

    updatedFormInput.value = value;
    updatedFormInput.touched = true;
    updatedFormInput.valid = validate(value, updatedFormInput.validationRules)

    updatedForm[name] = updatedFormInput;

    let formIsValid = true;
    for (let input in updatedForm) {
      formIsValid = updatedForm[input].valid && formIsValid;
    }

    this.setState({
      formFields: updatedForm,
      formIsValid: formIsValid
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    document.getElementById('mSent').classList.remove('mSent');
  }

  inputErrorFeedback(field) {
    const { valid, touched } = this.state.formFields[field];
    let cssClass = 'contact-input';
    if (touched && !valid) {
      cssClass = 'contact-input input-error'
    }
    return cssClass;
  }

  render () {
    const { loc, action } = this.state;
    return (
      <form
      id="con"
      name={loc}
      className="contact"
      method="POST"
      action={action}
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={this.handleSubmit}
      >
        <input
        type="hidden"
        name="form-name"
        value={loc}
        />
        <input
        type="text"
        name="fname"
        value={this.state.formFields.fname.value}
        placeholder="שם מלא"
        onChange={this.handleChange}
        className={this.inputErrorFeedback('fname')}
        />
        <input
        type="email"
        name="email"
        value={this.state.formFields.email.value}
        placeholder="אי-מייל"
        onChange={this.handleChange}
        className={this.inputErrorFeedback('email')}
        />
        <textarea
        form="con"
        name="message"
        value={this.state.formFields.message.value}
        placeholder="ההודעה שלך"
        onChange={this.handleChange}
        className={this.inputErrorFeedback('message')}
        />
        <Button text="שלח" disabled={!this.state.formIsValid}>
          <input type="submit" name="submit" />
        </Button>
        <span id="mSent" className="mSent">ההודעה נשלחה בהצלחה</span>
      </form>
    )
  }
}

export default ContactUs;
