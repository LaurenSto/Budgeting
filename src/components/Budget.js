import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [showModal, setShowModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0);

    const handleClose = () => setShowModal(false);
    const handleShow = (message) => {
        setErrorMessage(message);
        setShowModal(true);
    };

    const handleBudgetChange = (event) => {
        const value = parseInt(event.target.value);
        if (value > 20000) {
            handleShow(`Budget cannot exceed ${currency}20000`);
        } else if (value < totalExpenses) {
            handleShow(`Budget cannot be lower than the total expenses already allocated`);
        } else {
            setNewBudget(value);
        }
    };

    const saveBudget = () => {
        if (newBudget > 20000) {
            handleShow(`Budget cannot exceed ${currency}20000`);
        } else if (newBudget < totalExpenses) {
            handleShow(`Budget cannot be lower than the total expenses already allocated`);
        } else {
            dispatch({ type: 'SET_BUDGET', payload: newBudget });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <div>
                <input
                    type="number"
                    step="10"
                    value={newBudget}
                    onChange={handleBudgetChange}
                    className="form-control"
                />
                <button onClick={saveBudget} className="btn btn-primary mt-2">Save</button>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{errorMessage}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Budget;

