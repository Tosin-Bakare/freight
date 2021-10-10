import React from 'react';
import { BsGeoAltFill } from 'react-icons/bs';
import { MdDateRange } from 'react-icons/md';
import {AiOutlineInfoCircle} from 'react-icons/ai';

import './BoxTwo.styles.css';

const BoxTwo = () => (
    <div className='BoxTwo'>
        <AiOutlineInfoCircle className='circleIcon' />
        <div className='options1'>
            <div >
                <button className='ImportExport'>Import</button>
                <button className='ImportExport'>Export</button>
            </div>
            <div className='GeoDiv'>
                 <BsGeoAltFill className='GeoIcon'/>
                  <input className='From' type="text" name="name" placeholder="From City or port"/>
            </div>
              <div className='GeoDiv'>
                 <BsGeoAltFill className='GeoIcon'/>
                 <input className='From' type="text" name="name" placeholder="To City or port"/>
              </div>
            
        </div>
         <div className='options2'>
             <div className='GeoDiv'>
                 < MdDateRange className='GeoIcon' />
                    <input className='From-2' type="text" name="name" placeholder="Ready Date"/>
             </div>
            
            <select className='From-3' >
                <option selected value="incoterms">incoterms</option>
                <option value="incoterms">incoterms</option>
            </select>
            {/* <input className='From-2' type="text" name="name" placeholder="Incoterms"/> */}
            <input className='From-2' type="text" name="name" placeholder="Total Cargo Value"/>
        </div>
    </div>
)
export default BoxTwo;