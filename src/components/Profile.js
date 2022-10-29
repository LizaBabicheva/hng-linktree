import React from 'react';
import './Profile.css';
import profilepic from '../images/avatar.png';

function Profile() {

  return (
    <section id='profile'>
      <img id='profile__img' alt='Profile pic' src={profilepic}></img>
      <h2 id='twitter'>Liza Babicheva</h2>
      <p id='slack'></p>
    </section>
  )
}

export default Profile;