import React from 'react';
import './Hamburger.styles.css';

const Hamburger = ({isOpen}) => {
    return(
         <div className='hamburger'> 
            <span className='burger burger1'></span>
            <span className='burger burger2'></span>
            <span className='burger burger3'></span>
        </div>
    )
}
export default Hamburger;