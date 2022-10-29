import React from 'react';
import './Links.css';

function Links() {

    return (
        <div id='links'>
            <a id='btn__zuri' className='button' href='https://training.zuri.team/'>Zuri Team</a>
            <a id='books' className='button' href='https://books.zuri.team/'>Zuri Books</a>
            <a id='book__python' className='button' href='https://books.zuri.team/python-for-beginners?ref_id=<LizaBabicheva>'>Python Books</a>
            <a id='pitch' className='button' href='https://background.zuri.team/'>Background Check for Coders</a>
            <a id='book__design' className='button' href='https://books.zuri.team/design-rules'>Design Books</a>
        </div>
    )
}

export default Links;