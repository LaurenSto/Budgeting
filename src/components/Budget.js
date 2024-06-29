import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        setNewBudget(value);
    };

    useEffect(() => {
        const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);
        if (newBudget < totalExpenses) {
            alert("Budget cannot be lower than total spending");
            setNewBudget(totalExpenses);
            dispatch({ type: 'SET_BUDGET', payload: totalExpenses });
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    }, [newBudget, dispatch, expenses]);

    return (
        <div className='alert alert-secondary'>
            <span style={{ paddingRight: "13px" }}>Budget:  {currency}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange} 
                min="0"
                className="form-control"
                style={{ display: 'inline-block', width: 'auto' }}
            />
        </div>
    );
};

export default Budget;