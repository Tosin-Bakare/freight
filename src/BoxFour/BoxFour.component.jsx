import React from 'react';
import './BoxFour.styles.css';

const BoxFour = () => (
    <div className='BoxFour'>
        <h2 className='text'>Additional Services</h2>
        <div className='AdditionalServices'>
             <div className='additional'>
                 <div className='TextSwitch'>
                     <label className="switch">
                        <input type="checkbox"/>
                        <span className='slider round'></span>
                    </label>
                    <div className='export'><h4>Export Forwarding</h4>
                    <p className='ExportP'>We handle customs clearance and documentation</p>
                 </div> 
            </div>
            <div className='TextSwitch'>
                 <label className="switch">
                        <input type="checkbox"/>
                        <span className='slider round'></span>
                    </label>
                    <div className='export' ><h4>Cargo Insurance</h4>
                     <p className='ExportP'>Protect your cargo from logistics risks up to its full value.</p></div>
                </div>      
             </div>
        <div className='additional'>
            <div className='ImportCustoms'>
                 <div className='TextSwitch'>
                     <label className="switch">
                        <input type="checkbox"/>
                        <span className='slider round'></span>
                    </label>
            <div className='cargo'><h4>Import Customs Clearance</h4>
               <p className='ExportP'>We handle import customs and regulatory requirements</p></div>
               </div>
                <div className='TextSwitch'>
                     <label className="switch">
                        <input type="checkbox"/>
                        <span className='slider round'></span>
                    </label>
            <div className='cargo'><h4 className='Transport'> Transport/Delivery</h4>
               <p className='ExportP'>We deliver the cargo to your doorstep from the ports.</p></div>
               </div>
        </div>
            </div>
            
        </div>
       
    </div>
)
export default BoxFour;

