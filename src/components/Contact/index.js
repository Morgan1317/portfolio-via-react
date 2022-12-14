import React, { useState } from 'react';

import { validateEmail } from '../../utils/helpers';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section>
      
      <form className='row text-center form-div' id="contact-form" onSubmit={handleSubmit}>
      <h1 className='col-12 form-title' data-testid="h1tag" >Contact me</h1>
        <div className='col-12 form-title'>
          <label className='col-3 col-sm-6 text-center' htmlFor="name">Name:</label>
          <input className='col-7' type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label className='col-3 col-sm-6 text-center' htmlFor="email">Email address:</label>
          <input className='col-7' type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label className='col-3 col-sm-6 text-center' htmlFor="message">Message:</label>
          <textarea className='col-7' name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <div>
          <button className='btn col-2 align-self-center' data-testid="button" type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
