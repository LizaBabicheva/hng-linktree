import React from 'react';

function Contact() {

    return (
        <section className='contact-page'>
            <form className='contact-form'>
                <h2 className='contact-form__header'>Contact Me</h2>
                <p className='contact-form__description'>Hi there, contact me to ask me about anything you have in mind.</p>
                <fieldset className='contact-form__fieldset'>
                    <label for='first_name' className='contact-form__input-label'>First name
                        <input
                            id='first_name'
                            className='contact-form__input contact-form__input_type_first-name'
                            type='text'
                            placeholder='Enter your first name'
                            name='first-name'
                            required></input>
                        <span className='contact-form__error'></span>
                    </label>
                    <label for='last_name' className='contact-form__input-label'>Last name
                        <input
                            id='last_name'
                            className='contact-form__input contact-form__input_type_last-name'
                            type='text'
                            placeholder='Enter your last name'
                            name='last-name'
                            required
                        ></input>
                        <span className='contact-form__error'></span>
                    </label>
                    <label for='email' className='contact-form__input-label'>Email
                        <input
                            id='email'
                            className='contact-form__input contact-form__input_type_email'
                            type='email'
                            placeholder='yourname@email.com'
                            name='email'
                            required
                        ></input>
                        <span className='contact-form__error'></span>
                    </label>
                    <label for='message' className='contact-form__input-label'>Message
                        <textarea
                            id='message'
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            name='message'
                        ></textarea>
                        <span className='contact-form__error'></span>
                    </label>
                    <label for='contact-checkbox'>
                        <input
                        id='contact-checkbox'
                        type="checkbox">
                        </input>
                        <p>You agree to providing your data to Liza Babicheva who may contact you.</p>
                        <span></span>
                    </label>
                </fieldset>
                <button id='btn__submit' className='contact-form__submit' type='submit'>Send message</button>
            </form>
        </section>
    )
}

export default Contact;


// Add another anchor tag styled as a Button with an id of 'contact’ that redirects to "/contact" page in your app.
// A First and last name input fields with ids 'first_name' and 'last_name' respectively
// An Email address input field with an id of 'email'
// A Textarea with an id of 'message' to contain the message of the person
// A button with an id of 'btn__submit’ that will submit the form
// All fields should have appropriate label tags