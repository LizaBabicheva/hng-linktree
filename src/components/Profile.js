import React from 'react';
import profilepic from '../images/profile-pic.png';

function Profile() {

  return (
    <section className='profile' id='profile'>
      <button className='profile__share-button' type='button' aria-label='Share profile'></button>
      <img className='profile__img' id='profile__img' alt='Profile pic' src={profilepic}></img>
      <button className='profile__img-edit' type='button' aria-label='Change photo'></button>
      <a className='profile__link' id='twitter' href='https://twitter.com/Lizazavrrr'>Liza Babicheva</a>
      <a className='profile__link profile__link_hide' id='slack' href='https://hng9.slack.com/team/U048L7C2KNH'>Liza Babicheva</a>
    </section>
  )
}

export default Profile;