// Currencychanges.js
import React, { useState } from 'react';
import CurrencyDropdown from './CurrencyDropdown';
import Budget from './Budget';

function Currencychanges() {
    // Define state for selected currency
    const [selectedCurrency, setSelectedCurrency] = useState('$');

    // Event handler to handle currency change
    const handleCurrencyChange = (currency) => {
        setSelectedCurrency(currency);
    };

    return (
        <div>
            <CurrencyDropdown onCurrencyChange={handleCurrencyChange} />
            <Budget currency={selectedCurrency} /> {/* Pass selectedCurrency as a prop */}
        </div>
    );
}

export default Currencychanges;