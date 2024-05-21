import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    // Removed local state management because Redux is managing the state
    const handleBudgetChange = (event) => {
        dispatch({ type: 'SET_BUDGET', payload: parseInt(event.target.value) })
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type="number" step="10" value={budget} onChange={handleBudgetChange} style={{width: 'fit-content'}}></input>
        </div>
    );
};
export default Budget;
