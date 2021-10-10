import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import './NavBar.styles.css';

const NavBar = () => (
    <div className='Nav'>
        <div className='LogoSearch'>
             <div className ='Logo'>Send <span className='freight'>FREIGHT</span> </div>
            {/* <form> */}
                {/* <label> */}
                     <input className='search' type="text" name="name" placeholder="Search "/>
                     < i className='icon'><RiSearchLine /> </i>
                {/* </label> */}
            {/* </form> */}
        </div>
       
        <div className='buttons'>
            <button className='request'>Request Quote</button>
            <button className='book'>Book shipment</button>
        </div>
    </div>
)
    
export default NavBar;