import React from 'react';
import './Links.css';
import slack from '../images/slack-logo.svg';
import github from '../images/github-logo.svg';

function Links() {

    return (
        <section id='links'>
            <div className='buttons'>
            <a id='btn__zuri' className='button' href='https://training.zuri.team/'>Zuri Team</a>
            <a id='books' className='button' href='https://books.zuri.team/'>Zuri Books</a>
            <a id='book__python' className='button' href='https://books.zuri.team/python-for-beginners?ref_id=<LizaBabicheva>'>Python Books</a>
            <a id='pitch' className='button' href='https://background.zuri.team/'>Background Check for Coders</a>
            <a id='book__design' className='button' href='https://books.zuri.team/design-rules'>Design Books</a>
            </div>
            <div classname='social'>
                <a href='https://github.com/LizaBabicheva' alt='Slack link'><img className='social-icon' src={slack}></img>
                </a>
                <a href='#' alt='Github link'><img className='social-icon' src={github}></img>
                </a>
            </div>
        </section >
    )
}

export default Links;