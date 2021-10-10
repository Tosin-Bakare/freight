import React from 'react';
import './BoxThree.styles.css';

const BoxThree = () => (
    <div className='BoxThree'>
        <h2 className='text'>Cargo Details</h2>
        <div className='service'>
            <div className='Air'><h4>Air Freight</h4></div>
            <div className='ServiceOption' ><h4>Sea Freight</h4></div>
            <div className='ServiceOption' ><h4>Inland <br />(Truck & Barge) </h4></div>
            <div className='ServiceOption' ><h4>Customs Clearance </h4></div>
        </div>
    </div>
)
export default BoxThree;