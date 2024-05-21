import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const renderExpenseItems = (expenses) => {
    return expenses.map((expenseItem) => (
        <ExpenseItem
            key={expenseItem.id}
            id={expenseItem.id}
            name={expenseItem.name}
            cost={expenseItem.cost}
        />
    ));
};

const ExpenseList = () => {
    const { expenses } = useContext(AppContext);

    return (
        <table className='table'>
            <thead className='thead-light'>
                <tr>
                    <th scope='col'>Department</th>
                    <th scope='col'>Allocated Budget</th>
                    <th scope='col'>Increase by 10</th>
                    <th scope='col'>Decrease by 10</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
            <tbody>{renderExpenseItems(expenses)}</tbody>
        </table>
    );
};

export default ExpenseList;
