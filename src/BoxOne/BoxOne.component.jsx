import React from 'react';

import { MdOutlineAirplanemodeActive} from 'react-icons/md';
import { RiShipLine } from 'react-icons/ri';
import { MdLocalShipping } from 'react-icons/md';
import './BoxOne.styles.css';

const BoxOne = () => (
    <div className='BoxOne'>
        <h2 className='text'>Select a device</h2>
        <div className='service'>
            <div className='Air'>
                <h4>Air Freight</h4>
                < MdOutlineAirplanemodeActive className='AirplaneIcon' />
            </div>
               
            <div className='ServiceOption' >
                 <div className='Sea'>
                <h4>Sea Freight</h4>
                {/* < RiShipLine className='ShipIcon' /> */}
            </div>
                </div>
            <div className='ServiceOption' ><h4>Inland <br />(Truck & Barge) </h4></div>
            <div className='ServiceOption' ><h4>Customs Clearance </h4></div>
        </div>
    </div>
)
export default BoxOne;