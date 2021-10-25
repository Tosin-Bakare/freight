import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import Hamburger from '../Hamburger/Hamburger.component';
import './NavBar.styles.css';
// import { useState } from 'react';

const NavBar = () => {
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }
    return(
         <div className='Nav'>
        <div className='LogoSearch'>
             <div className ='Logo'><span className='send'>Send</span> <span className='freight'>FREIGHT</span> </div>
                     <input className='search' type="text" name="name" placeholder="Search "/>
                    <RiSearchLine  className='icon' /> 
        </div>
       
        <div className='buttons'>
            <button className='request'>Request Quote</button>
            <button className='book'>Book shipment</button>
        </div>
        <div className="hamburger" onClick={toggleHamburger}>
            <Hamburger  isOpen={hamburgerOpen}/>
        </div>
    </div>
    )
}
    
export default NavBar;