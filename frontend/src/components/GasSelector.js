import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const GasSelect = () => {
    const {dispatch} = useContext(AppContext);
    const handleGasChange = (e) => {
        const selectedgas = e.target.value;
        dispatch({
            type: 'CHG_GAS',
            payload: selectedgas,
          });  
      };
    return (
      <div> 
        <select 
        name="gas" 
        id="gas" 
        className='form-select'
        onChange={handleGasChange}> 
        <option value="20" id="regular">Regular($20)</option> 
        <option value="21" id="premium" selected>Premium($21)</option> 
        <option value="15" id="diesel">Diesel($15)</option> 
        </select>
      </div>
    );
  };
  
  export default GasSelect;