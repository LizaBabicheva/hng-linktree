import React from 'react';
import slack from '../images/slack-logo.svg';
import github from '../images/github-logo.svg';

function Links() {

    return (
        <section id='links' className='links'>
            <div className='links__buttons'>
                <a id='btn__zuri' className='links__button' href='https://training.zuri.team/'>Zuri Team</a>
                <a id='books' className='links__button' href='https://books.zuri.team/'>Zuri Books</a>
                <a id='book__python' className='links__button' href='https://books.zuri.team/python-for-beginners?ref_id=<LizaBabicheva>'>Python Books</a>
                <a id='pitch' className='links__button' href='https://background.zuri.team/'>Background Check for Coders</a>
                <a id='book__design' className='links__button' href='https://books.zuri.team/design-rules'>Design Books</a>
            </div>
            <div className='social'>
                <a className='social__icon' href='https://hng9.slack.com/team/U048L7C2KNH'><img className='social__icon' src={slack} alt='Slack link'></img>
                </a>
                <a className='social__icon' href='https://github.com/LizaBabicheva'><img src={github} alt='Github link'></img>
                </a>
            </div>
        </section >
    )
}

export default Links;