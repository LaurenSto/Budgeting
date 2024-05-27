import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    // Synchroniser newBudget avec budget du contexte global
    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value, 10);
        if (isNaN(value)) {
            alert("Please enter a valid number!");
            return;
        }

        setNewBudget(value);

        if (value > 20000) {
            alert("Budget cannot exceed 20000!");
            return;
        }

        if (value < 0) {
            alert("Budget cannot be less than 0!");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
        </div>
    );
};

export default Budget;
