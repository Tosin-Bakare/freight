import React from 'react';
import './BoxThree.styles.css';

const BoxThree = () => (
    <div className='BoxThree'>
        <div className='cargoTop'>
              <h2 className='text'>Cargo Details</h2>
            <div className='TextSwitch'>
                <label className="switch">
                        <input type="checkbox"/>
                        <span className='slider round'></span>
            </label>
            <p>Dangerous cargo (ex. Chemicals, Battery)</p>
            </div>
        </div>
      

            <div  className='Details'>
                <div className='Total'>
                    <button className='TotalD'>Total Dimensions</button>
                    <button className='PackageD'>Package Details</button>
                </div>
                {/* <div className='Bigcbm'>
                    <div className='Details2'>
                        <input className='cbmHolder' type="text" name="name" placeholder="cbm" />
                        <p className='cbm'>cbm</p>
                    </div>
                    <div className='Details2'>
                         <input className='cbmHolder' type="text" name="name" placeholder="kg"/>
                         <p className='cbm'>kg</p>
                     </div>
                </div> */}
             
            </div>
        
            
    </div>
)
export default BoxThree;


 

                