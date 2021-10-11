import React from 'react';

import { MdOutlineAirplanemodeActive} from 'react-icons/md';
import { RiShipLine } from 'react-icons/ri';
import { MdLocalShipping } from 'react-icons/md';
import {GiPoliceOfficerHead } from 'react-icons/gi';
import './BoxOne.styles.css';

const BoxOne = () => (
    <div className='BoxOne'>
        <h2 className='text-service'>Select a service</h2>
        <div className='service'>
            <div className='Air'>
                <h4>Air Freight</h4>
                < MdOutlineAirplanemodeActive className='AirplaneIcon' />
            </div>
               
            <div className='ServiceOption' >
                 <div className='Sea'>
                <h4>Sea Freight</h4>
                < RiShipLine className='ShipIcon' />
                </div>
            </div>
            <div className='ServiceOption' >
                <div className='Sea'>
                <h4>Inland <br />(Truck & Barge) </h4>
                <MdLocalShipping className='TruckIcon' />
                </div>
            </div>
             <div className='ServiceOption' >
                <div className='Sea'>
                <h4>Customs Clearance</h4>
                <GiPoliceOfficerHead className='PoliceIcon' />
                </div>
            </div>
            
        </div>
    </div>
)
export default BoxOne;