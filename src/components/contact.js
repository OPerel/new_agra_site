import React, { Component } from 'react';
import validate from './validator';
import Button from '../components/button';
import './contact.css';

class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loc: props.loc,
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
    console.log('formIsValid', formIsValid);

    this.setState({
      formFields: updatedForm,
      formIsValid: formIsValid
    })
    console.log(this.state);
  }

  // handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(this.state);
  // }

  render () {
    return (
      <form
        id="con"
        name={this.state.loc}
        className="contact"
        method="POST"
        action="#"
        >
        <input
        type="text"
        name="fname"
        value={this.state.formFields.fname.value}
        placeholder="שם מלא"
        onChange={this.handleChange}
        />
        <input
        type="email"
        name="email"
        value={this.state.formFields.email.value}
        placeholder="אי-מייל"
        onChange={this.handleChange}
        />
        <textarea
        form="con"
        name="message"
        value={this.state.formFields.message.value}
        placeholder="ההודעה שלך"
        onChange={this.handleChange}
        />
        <Button text="שלח" disabled={!this.state.formIsValid}>
          <input type="submit" name="submit" />
        </Button>
      </form>
    )
  }
}

export default ContactUs;
