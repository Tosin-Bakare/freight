import React from 'react';
import BoxOne from '../BoxOne/BoxOne.component';
import BoxTwo from '../BoxTwo/BoxTwo.component';
import BoxThree from '../BoxThree/BoxThree.component';
import BoxFour from '../BoxFour/BoxFour.component';
import {BiArrowBack } from 'react-icons/bi'
import './body.styles.css';

const Body = () => (
    <div className='body'>
        <div className='ArrowWords'>
             <BiArrowBack className='Back-Arrow' />
        <div className='words'>
             <h1 className='New'>New Booking</h1>
              <p className='fill'>Fill in the information to get a quote or create a new booking</p>
        </div>
        </div>
        <BoxOne />
        <BoxTwo />
        <BoxThree />
        <BoxFour /> <br/> <br/>
    </div>
)
export default Body;