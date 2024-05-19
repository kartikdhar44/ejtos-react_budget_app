import React, { useState } from 'react';

const Currency=(props)=>{
  const [currency,setCurrency]=useState('');

    return (<div className='alert alert-success' style={{width:"20%"}}>
          <div >
                <label class="Currency" htmlFor="inputGroupSelect02" style={{alignContent:"center"}}>Currency</label>
                  </div>
                  <div>
                    <select class="select-currency" onChange={(event) => setCurrency(event.target.value)} style={{backgroundColor: "green",height:"30px"}}>
                         <option defaultValue>{currency}</option>
                        <option value="$" name="dollar"> $Dollar</option>
                       <option value="£" name="pound">£Pound</option>
                      <option value="€" name="euro">€Euro</option>
                     <option value="₹" name="rupee">₹Rupee</option>
                    </select>
                  </div>
    </div>);
}
export default Currency;