import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="contact">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} className="px-5">
                <div className="py-2">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} />
                </div>
                <div className="py-2">
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div className="py-2">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" onBlur={handleChange} defaultValue={message} />
                </div>
                {errorMessage && (
                    <div className="py-1">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="contact-button" type="submit">Submit</button>
            </form>
        </section>
    )

}

export default ContactForm;
