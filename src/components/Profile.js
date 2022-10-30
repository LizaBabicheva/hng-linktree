import React from 'react';
import profilepic from '../images/profile-pic.png';

function Profile() {

  return (
    <section className='profile' id='profile'>
      <img className='profile__img' id='profile__img' alt='Profile pic' src={profilepic}></img>
      <button className='profile__img-edit' type='button' aria-label='Change photo'></button>
      <h2 className='profile__twitter-link' id='twitter'>Liza Babicheva</h2>
      <p className='profile__slack-link' id='slack'></p>
    </section>
  )
}

export default Profile;