import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import "../index.css";

const AllocationForm = (props) => {
    const { dispatch, remaining, currency } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const submitEvent = () => {

        if(cost > remaining) {
            alert("The value cannot exceed remaining funds " + currency + remaining);
            setCost("");
            return;
        }

        const expense = {
            name: name,
            cost: parseInt(cost),
        };
        if(action === "Reduce") {
            dispatch({
                type: 'RED_EXPENSE',
                payload: expense,
            });
        } else {
                dispatch({
                    type: 'ADD_EXPENSE',
                    payload: expense,
                });
            }
    };

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div>
            <div className='row'>

            <div className="input-group mb-3" style={{ marginLeft: '10px' }}>

                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01" id="labelDep">Department</label>
                    </div>

                    <select className="custom-select" id="inputGroupSelect01" onChange={(event) => setName(event.target.value)}>
                        <option defaultValue>Choose...</option>
                        <option value="Marketing" name="marketing"> Marketing</option>
                        <option value="Sales" name="sales">Sales</option>
                        <option value="Finance" name="finance">Finance</option>
                        <option value="HR" name="hr">HR</option>
                        <option value="IT" name="it">IT</option>
                        <option value="Admin" name="admin">Admin</option>
                    </select>

                    <div className="input-group-prepend" style={{ marginLeft: '10px' }}>
                        <label className="input-group-text" htmlFor="inputGroupSelect02" id="labelAll">Allocation</label>
                    </div>

                    <select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
                        <option defaultValue value="Add" name="Add">Add</option>
                        <option value="Reduce" name="Reduce">Reduce</option>
                    </select>

                    <div style={{ marginLeft: '10px', paddingRight: '1px' }}>
                        <label htmlFor="cost" id="labelAll">{currency}</label>
                    </div>

                    <input
                        required='required'
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ size: 10}}
                        onChange={(event) => setCost(event.target.value)}>
                    </input>

                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="currencySelect" id="labelCur">Currency</label>
                    </div>
                    
                    <select className="custom-select" id="currencySelect" value={currency} onChange={handleCurrencyChange}>
                        <option value="£">£ Pound</option>
                        <option value="$">$ Dollar</option>
                        <option value="€">€ Euro</option>
                        <option value="₹">₹ Ruppee</option>
                    </select>

                    <button className="btn btn-primary" id="btn" onClick={submitEvent} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>

                </div>

            </div>
        </div>
    );
};

export default AllocationForm;
