// CurrencyContext.js
import React, { createContext, useContext, useState } from 'react';

const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
    const [selectedCurrency, setSelectedCurrency] = useState('$'); // Default currency

    const updateCurrency = (newCurrency) => {
        setSelectedCurrency(newCurrency);
    };

    return (
        <CurrencyContext.Provider value={{ selectedCurrency, updateCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    return useContext(CurrencyContext);
};