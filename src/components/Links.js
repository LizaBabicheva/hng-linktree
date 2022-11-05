import React from 'react';
// import slack from '../images/slack-logo.svg';
// import github from '../images/github-logo.svg';
import { Link } from 'react-router-dom';


function Links() {

    return (
        <section id='links' className='links'>
            <div className='links__buttons'>
                <a id='btn__zuri' className='links__button' href='https://training.zuri.team/'>Zuri Team
                    <span className='tooltip'>Meet Zuri Team</span>
                </a>
                <a id='books' className='links__button' href='https://books.zuri.team/'>Zuri Books
                    <span className='tooltip'>Stop scrolling your twitter and go read a book!</span>
                </a>
                <a id='book__python' className='links__button' href='https://books.zuri.team/python-for-beginners?ref_id=<LizaBabicheva>'>Python Books
                    <span className='tooltip'>Want to change your life before 2023? Check this one.</span>
                </a>
                <a id='pitch' className='links__button' href='https://background.zuri.team/'>Background Check for Coders
                    <span className='tooltip'>Learn & earn! Sounds nice, but what about learn & earn remotely?</span>
                </a>
                <a id='book__design' className='links__button' href='https://books.zuri.team/design-rules'>Design Books
                    <span className='tooltip'>This might be helpful too. Especially for free.</span>
                </a>
                <Link id='contact' className='links__button' to='/contact'>Contact Me
                    <span className='tooltip'>Feel free to contact Me.</span>
                </Link>
            </div>
            {/* <div className='social'>
                <a className='social__icon' href='https://hng9.slack.com/team/U048L7C2KNH'><img className='social__icon' src={slack} alt='Slack link'></img>
                </a>
                <a className='social__icon' href='https://github.com/LizaBabicheva'><img src={github} alt='Github link'></img>
                </a>
            </div> */}
        </section >
    )
}

export default Links;