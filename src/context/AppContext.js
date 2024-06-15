import React, { createContext, useReducer } from 'react';

// The reducer to update the state based on the action
export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            const totalBudget = state.expenses.reduce((prev, curr) => prev + curr.cost, 0) + action.payload.cost;
            if (totalBudget <= state.budget) {
                const updatedExpenses = state.expenses.map(exp => {
                    if (exp.name === action.payload.name) {
                        exp.cost += action.payload.cost;
                    }
                    return exp;
                });
                return {
                    ...state,
                    expenses: updatedExpenses,
                };
            } else {
                alert("Cannot increase the allocation! Out of funds");
                return state;
            }
        case 'RED_EXPENSE':
            const reducedExpenses = state.expenses.map(exp => {
                if (exp.name === action.payload.name && exp.cost - action.payload.cost >= 0) {
                    exp.cost -= action.payload.cost;
                }
                return exp;
            });
            return {
                ...state,
                expenses: reducedExpenses,
            };
        case 'DELETE_EXPENSE':
            const updatedExpensesAfterDelete = state.expenses.map(exp => {
                if (exp.name === action.payload) {
                    exp.cost = 0;
                }
                return exp;
            });
            return {
                ...state,
                expenses: updatedExpensesAfterDelete,
            };
        case 'SET_BUDGET':
            return {
                ...state,
                budget: action.payload,
            };
        case 'CHG_CURRENCY':
            return {
                ...state,
                currency: action.payload,
            };
        default:
            return state;
    }
};

// Initial state
const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£',
};

// Create context
export const AppContext = createContext();

// Provider component
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    const remaining = state.budget - state.expenses.reduce((total, item) => total + item.cost, 0);

    return (
        <AppContext.Provider value={{ ...state, dispatch, remaining }}>
            {props.children}
        </AppContext.Provider>
    );
};

