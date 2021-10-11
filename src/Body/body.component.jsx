import React from 'react';
import BoxOne from '../BoxOne/BoxOne.component';
import BoxTwo from '../BoxTwo/BoxTwo.component';
import BoxThree from '../BoxThree/BoxThree.component';
import BoxFour from '../BoxFour/BoxFour.component';
import './body.styles.css';

const Body = () => (
    <div className='body'>
        
        <h1 className='New'>New Booking</h1>
        <p className='fill'>Fill in the information to get a quote or create a new booking</p>
        <BoxOne />
        <BoxTwo />
        <BoxThree />
        <BoxFour /> <br/> <br/>
    </div>
)
export default Body;