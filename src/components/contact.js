import React, { Component } from 'react';
import validate from './validator';
import Button from '../components/button';
import './contact.css';

const encode = (data) => {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

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

  handleChange = (e) => {
    document.getElementById('mSent').classList.add('mSent');

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

  handleSubmit = async e => {
    const {fname, email, message} = this.state.formFields;
    const body = {
      name: fname.value,
      email: email.value,
      message: message.value
    };

    e.preventDefault();
    try {
      const message = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({"form-name": this.state.loc, ...body})
      });
      document.getElementById('mSent').classList.remove('mSent');
      this.clearForm();
      return message;
    } catch (err) {
      console.log(err);
    }
  }

  clearForm() {
    this.setState(state => {
      state.formIsValid = false
      return Object.keys(state.formFields).map(key => state.formFields[key].value = '')
    });
  }

  inputErrorFeedback(field) {
    const { valid, touched } = this.state.formFields[field];
    return !valid && touched ? 'contact-input input-error' : 'contact-input';
  }

  render () {
    const { loc } = this.state;
    return (
      <form
      id="con"
      name={loc}
      className="contact"
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
        <Button
        text="שלח"
        disabled={!this.state.formIsValid}
        classN="contact-btn"
        >
          <input type="submit" name="submit" />
        </Button>
        <span id="mSent" className="mSent">ההודעה נשלחה בהצלחה</span>
      </form>
    )
  }
}

export default ContactUs;
