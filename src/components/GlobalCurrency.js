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
           <div Class='me-2'></div>
            <label htmlFor="currency-select">Currency: </label>
            <select
                id="currency-select"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                className='currency-select'
                >
            
                <option value="$">(£ Pound)</option>
                <option value="€">(€ Euro)</option>
                <option value="£">($ Dollar)</option>
                <option value="₹">(₹ Rupee)</option>
                {/* Add more currency options as needed */}
            </select>
        </div>
    );
};

export default CurrencyDropdown;