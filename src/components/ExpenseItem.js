import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import Currency from './Currency';

const ExpenseItem = (props) => {
    const {currency, dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const buttonStylePlus = {
        borderRadius: "100px",
        backgroundColor: 'green',
        color: "white"
    };

    const buttonStyleMinus = {
        borderRadius: "100px",
        backgroundColor: 'red',
        color: "white"
    };
    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button style={buttonStylePlus} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button style={buttonStyleMinus} onClick={event=> decreaseAllocation(props.name)}>-</button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
