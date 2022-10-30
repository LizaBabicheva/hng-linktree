import React from 'react';
import './Profile.css';
import profilepic from '../images/avatar.png';

function Profile() {

  return (
    <section className='profile' id='profile'>
      <img className='profile__img' id='profile__img' alt='Profile pic' src={profilepic}></img>
      <h2 className='profile__twitter-link' id='twitter'>Liza Babicheva</h2>
      <p className='slack__twitter-link' id='slack'></p>
    </section>
  )
}

export default Profile;