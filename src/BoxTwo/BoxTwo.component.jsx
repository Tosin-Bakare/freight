import React from 'react';
import { BsGeoAltFill } from 'react-icons/bs';
import './BoxTwo.styles.css';

const BoxTwo = () => (
    <div className='BoxTwo'>
        <h2>icon</h2>
        <div className='options1'>
            <input className='Import' type="text" name="name" placeholder="Import|Export"/>
            <input className='From' type="text" name="name" placeholder="From City or port"/>
            < i className='icon'><BsGeoAltFill/> </i>
            <input className='From' type="text" name="name" placeholder="To City or port"/>
        </div>
         <div className='options2'>
            <input className='From-2' type="text" name="name" placeholder="Ready Date"/>
            <select className='From-2' >
                <option selected value="incoterms">incoterms</option>
                <option value="incoterms">incoterms</option>
            </select>
            {/* <input className='From-2' type="text" name="name" placeholder="Incoterms"/> */}
            <input className='From-2' type="text" name="name" placeholder="Total Cargo Value"/>
        </div>
    </div>
)
export default BoxTwo;