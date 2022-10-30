import React from 'react';
import zurilogo from '../images/zuri-logo.svg';
import ifglogo from '../images/ifg-logo.svg';

function Footer() {

    return (
        <footer className='footer'>
            <a href='https://training.zuri.team/'>
                <img className='intership-logo' src={zurilogo} alt='Zuri Intership logo'></img>
            </a>
            <p className='footer__text'>HNG Internship 9 Frontend Task</p>
            <a href={ifglogo}>
                <img className='ifg-logo' src={ifglogo} alt='Ingressive for good logo'></img>
            </a>
        </footer>
    )
}

export default Footer;