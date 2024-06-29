import React, { useContext } from 'react';
import { BsTrash } from 'react-icons/bs';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

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
            payload: expense,
        });
    };

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency} {props.cost}</td>
            <td>
                <button id="increase" onClick={(event) => increaseAllocation(props.name)}> + </button>
            </td>
            <td>
                <button id="decrease" onClick={() => decreaseAllocation(props.name)}> - </button>
            </td>
            <td>
                <BsTrash id='delete' size='1.7em' onClick={handleDeleteExpense}></BsTrash>
            </td>
        </tr>
    );
};

export default ExpenseItem;