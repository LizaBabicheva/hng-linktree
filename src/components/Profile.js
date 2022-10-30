import React from 'react';
import profilepic from '../images/profile-pic.png';

function Profile() {

  return (
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
    </section>
  )
}

export default Profile;