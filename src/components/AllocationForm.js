import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const AllocationForm = () => {
    const { dispatch, remaining } = useContext(AppContext);
    const [name, setName] = useState('');
    const [cost, setCost] = useState('');
    const [action, setAction] = useState('');

    const handleFormSubmit = () => {
        if (cost > remaining) {
            // Display an error message within the component
            alert(`The value cannot exceed remaining funds £${remaining}`);
            setCost('');
            return;
        }

        const expense = {
            name,
            cost: parseInt(cost),
        };

        if (action === 'Reduce') {
            dispatch({ type: 'RED_EXPENSE', payload: expense });
        } else {
            dispatch({ type: 'ADD_EXPENSE', payload: expense });
        }
    };

    return (
        <div>
            <div className='row'>
                <div className='input-group mb-3' style={{ marginLeft: '2rem' }}>
                    {/* Department select */}
                    <label className='input-group-text' htmlFor='inputGroupSelect01'>
                        Department
                    </label>
                    <select
                        className='custom-select'
                        id='inputGroupSelect01'
                        onChange={(event) => setName(event.target.value)}
                    >
                        {/* Options here */}
                    </select>

                    {/* Allocation select */}
                    <label className='input-group-text' htmlFor='inputGroupSelect02'>
                        Allocation
                    </label>
                    <select
                        className='custom-select'
                        id='inputGroupSelect02'
                        onChange={(event) => setAction(event.target.value)}
                    >
                        {/* Options here */}
                    </select>

                    {/* Cost input */}
                    <input
                        required
                        type='number'
                        id='cost'
                        value={cost}
                        style={{ marginLeft: '2rem', width: '10rem' }}
                        onChange={(event) => setCost(event.target.value)}
                    />

                    {/* Save button */}
                    <button className='btn btn-primary' onClick={handleFormSubmit} style={{ marginLeft: '2rem' }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllocationForm;
