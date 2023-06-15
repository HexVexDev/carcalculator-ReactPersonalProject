import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import genericcar from "../images/car.svg";

const CustomCarForm = (props) => {
  const { dispatch} = useContext(AppContext);
  const [gastype, setGastype] = useState('');
  const [mileage, setMileage] = useState('');
  const [date, setDate] = useState('');
  const [weeklycost, setWeeklycost] = useState('');

  const submitEvent = () => {
    const info = {
      gastype: gastype,
      mileage: parseInt(mileage),
      date: date,
      weeklycost: parseInt(weeklycost),
    };
    
    dispatch({
      type: 'CALC_CUSTOM_CAR',
      payload: info,
    });
  };

  return (
    <div className="col-sm">
      <h2>Car A</h2>
      <div className="col">
        <img src={genericcar} width="300" height="300" class="d-inline-block align-top" alt="" />
      </div>
      <div className="col">
        <select
          className='custom-select'
          id='inputGroupSelect01'
          onChange={(event) => setGastype(event.target.value)}
        >
          <option defaultValue>Choose your Gas type...</option>
          <option value='20' name='regular'>
            Regular($20)
          </option>
          <option value='22' name='Premium'>
            Premium($22)
          </option>
          <option value='15' name='Diesel'>
            Diesel($15)
          </option>
        </select>
      </div>
      <div className="col">
        <input
          required='required'
          type='number'
          id='mileage'
          value={mileage}
          onChange={(event) => setMileage(event.target.value)}
        />
      </div>
      <div className="col">
        <input
          required='required'
          type='date'
          id='date'
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
      </div>
      <div className="col">
        <input
          required='required'
          type='number'
          id='weekly'
          value={weeklycost}
          onChange={(event) => setWeeklycost(event.target.value)}
        />
        <button
          className='btn btn-primary'
          onClick={submitEvent}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default CustomCarForm;
