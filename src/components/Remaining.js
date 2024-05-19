import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const calculateTotalExpenses = (expenses) => {
    return expenses.reduce((total, item) => total + item.cost, 0);
};

const determineAlertType = (totalExpenses, budget) => {
    return totalExpenses > budget ? 'alert-danger' : 'alert-success';
};

const Remaining = () => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = calculateTotalExpenses(expenses);
    const alertType = determineAlertType(totalExpenses, budget);

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: £{budget - totalExpenses}</span>
        </div>
    );
};

export default Remaining;
