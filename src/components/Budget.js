import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, currency} = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    // const [newCurrency, setNewCurrency] = useState(currency);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    // const handleCurrencyChange = (event) => {
    //     setNewCurrency(event.target.value);
    // }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>

{/* <select value={newCurrency} onChange={handleCurrencyChange} style={{backgroundColor: "green", color: "white"}}>
    <option value="$">$ Dollar</option>
    <option value="₹">₹ Rupee</option>
    <option value="£">£ Pound</option>
    <option value="€">€ Euro</option>
</select> */}

<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
