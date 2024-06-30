import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {

        setNewCurrency(event.target.value);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });

    }


    return (

            <select className="alert alert-success" id="inputGroupSelect01" onChange={handleCurrencyChange}>
                <option className="list-group-item list-group-item-success" value="$" name="Dollar">$ Dollar</option>
                <option className="list-group-item list-group-item-success" value="£" name="Pound">£ Pound</option>
                <option className="list-group-item list-group-item-success" value="€" name="Euro">€ Euro</option>
                <option className="list-group-item list-group-item-success" value="₹" name="Ruppee">₹ Ruppee</option>
            </select>
            );



};


export default Currency;
