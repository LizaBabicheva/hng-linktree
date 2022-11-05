import React from 'react';
import profilepic from '../images/profile-pic.png';
import Links from './Links';
import slack from '../images/slack-logo.svg';
import github from '../images/github-logo.svg';

function Main() {

  return (
    <main>
      <section className='profile' id='profile'>
        <button className='profile__share-button' type='button' aria-label='Share profile'></button>
        <img className='profile__img' id='profile__img' alt='Profile pic' src={profilepic}></img>
        <button className='profile__img-edit' type='button' aria-label='Change photo'></button>
        <div className='profile__links'>
          <a id='twitter' className='profile__link' href='https://twitter.com/Lizazavrrr'>Liza Babicheva
            <span className='tooltip'>Check out my twitter</span>
          </a>
        </div>
        <a className='profile__link profile__link_hide' id='slack' href='https://hng9.slack.com/team/U048L7C2KNH'>Liza Babicheva</a>

        <Links />

        <div className='social'>
          <a className='social__icon' href='https://hng9.slack.com/team/U048L7C2KNH'><img className='social__icon' src={slack} alt='Slack link'></img>
          </a>
          <a className='social__icon' href='https://github.com/LizaBabicheva'><img src={github} alt='Github link'></img>
          </a>
        </div>
      </section>

    </main>
  )
}

export default Main;