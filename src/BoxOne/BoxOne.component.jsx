import React from 'react';

import { ReactComponent as AirplaneIcon } from '../assets/BoxOne/Airplane.svg';
import './BoxOne.styles.css';

const BoxOne = () => (
    <div className='BoxOne'>
        <h2 className='text'>Select a device</h2>
        <div className='service'>
            <div className='Air'><h4>Air Freight</h4>
             <AirplaneIcon className='Airplane'/>
        </div>
               
            
            <div className='ServiceOption' ><h4>Sea Freight</h4></div>
            <div className='ServiceOption' ><h4>Inland <br />(Truck & Barge) </h4></div>
            <div className='ServiceOption' ><h4>Customs Clearance </h4></div>
        </div>
    </div>
)
export default BoxOne;