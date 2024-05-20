import React, { useState } from 'react';
import './currencyDropdown.css'

const CurrencyDropdown = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
        // You can perform additional actions based on the selected currency
    };

    return (
        <div className='alert alert-secondary d-flex align-items-center'>
            <label htmlFor="currency-select">Select Currency:</label>
            <select
                id="currency-select"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className='currency-select'
                >
            
                <option value="$">$ Dollar</option>
                <option value="€">€ Euro</option>
                <option value="£">£ Pound</option>
                <option value="₹">₹ Rupee</option>
                {/* Add more currency options as needed */}
            </select>
        </div>
    );
};

export default CurrencyDropdown;