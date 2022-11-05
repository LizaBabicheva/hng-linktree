import { useEffect, useState } from 'react';

function Contact() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        if(isChecked && firstName && lastName && email && text) {
            setIsValid(true);
        }
    }, [isChecked, firstName, lastName, email, text]);

    function handleFirstName(e) {
        setFirstName(e.target.value)
    }

    function handleLastName(e) {
        setLastName(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handleText(e) {
        setText(e.target.value)
    }
    function handleChecked() {
        setIsChecked(true);
    }

    return (
        <section className='contact-page'>
            <form className='contact-form'>
                <h2 className='contact-form__header'>Contact Me</h2>
                <p className='contact-form__description'>Hi there, contact me to ask me about anything you have in mind.</p>
                <fieldset className='contact-form__fieldset'>
                    <div className='contact-form__name'>
                        <label htmlFor='first_name' className='contact-form__input-label'>First name
                            <input
                                id='first_name'
                                className='contact-form__input contact-form__input_type_name'
                                type='text'
                                placeholder='Enter your first name'
                                name='first-name'
                                required
                                value={firstName}
                                onChange={handleFirstName}></input>
                            <span className='contact-form__error'></span>
                        </label>
                        <label htmlFor='last_name' className='contact-form__input-label'>Last name
                            <input
                                id='last_name'
                                className='contact-form__input contact-form__input_type_name'
                                type='text'
                                placeholder='Enter your last name'
                                name='last-name'
                                required
                                value={lastName}
                                onChange={handleLastName}
                            ></input>
                            <span className='contact-form__error'></span>
                        </label>
                    </div>
                    <label htmlFor='email' className='contact-form__input-label'>Email
                        <input
                            id='email'
                            className='contact-form__input contact-form__input_type_email'
                            type='email'
                            placeholder='yourname@email.com'
                            name='email'
                            required
                            value={email}
                            onChange={handleEmail}
                        ></input>
                        <span className='contact-form__error'></span>
                    </label>
                    <label htmlFor='message' className='contact-form__input-label'>Message
                        <textarea
                            id='message'
                            className='contact-form__input contact-form__input_type_textarea'
                            placeholder="Send me a message and I'll reply you as soon as possible..."
                            name='message'
                            required
                            value={text}
                            onChange={handleText}
                        ></textarea>
                        <span className='contact-form__error'></span>
                    </label>
                    <label htmlFor='contact-checkbox' className='checkbox'>
                        <input
                            id='contact-checkbox'
                            className='checkbox__input'
                            type="checkbox"
                            required
                            onChange={handleChecked}></input>
                        <span className='checkbox__input-visible'></span>
                        <span className='checkbox__text'>You agree to providing your data to Liza Babicheva who may contact you.</span>
                    </label>
                </fieldset>
                <button id='btn__submit'
                    className={`contact-form__submit ${!isValid && 'contact-form__submit_disabled'}`}
                    type='submit' arial-label='Submit'>Send message</button>
            </form>
        </section>
    )
}

export default Contact;