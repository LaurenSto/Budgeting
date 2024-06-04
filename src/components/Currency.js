import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const [currencyName, setCurrencyName] = useState('GBP');
    const { dispatch } = useContext(AppContext);

    const getCurrencySymbol = (locale, currency) => {
        return (0).toLocaleString(
          locale,
          {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
          }
        ).replace(/\d/g, '').trim()
      }

    const handleCurrency = (event) => {
        let locale = 'en-GB';
        if (event.target.value === 'USD') {
            locale = 'en-US';
        }
        if (event.target.value === 'INR') {
            locale = 'en-IN';
        }
        if (event.target.value === 'EUR') {
            locale = 'fr-FR';
        }
        dispatch({ type: 'CHG_CURRENCY', payload: getCurrencySymbol(locale ,event.target.value) })
        setCurrencyName(event.target.value)
    }

    return (
        <div className='alert alert-warning'>
            <span>Currency{' '}</span>
            <select defaultValue={currencyName} onChange={handleCurrency} style={{width: 'fit-content', color: 'inherit', backgroundColor: 'inherit', border: 'none'}}>
                <option value={'USD'}>{getCurrencySymbol('en-US' ,'USD')} Dollar</option>
                <option value={'GBP'}>{getCurrencySymbol('en-GB' ,'GBP')} Pound</option>
                <option value={'EUR'}>{getCurrencySymbol('en-US' ,'EUR')} Euro</option>
                <option value={'INR'}>{getCurrencySymbol('en-IN' ,'INR')} Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;