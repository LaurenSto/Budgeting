import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import Budget from './components/Budget';


// Add code to import the other components here under
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import { AppProvider } from './context/AppContext';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                            // Budget component
                                 <div className='head'>
                                       <Budget />
                                      </div>
                        }        
 
                        {
                            //Remaining component
                               <div className='head'>
                                    <Remaining />
                                     </div>
                        }        

                        {
                            //ExpenseTotal component
                                <div class='head'>
                                    <ExpenseTotal />
                                         </div>
                        }        
                       
                        {
                            //ExpenseList component
                                 <div class='center'>
                                    <ExpenseList />
                                          </div>
                        }         

                        {
                             //ExpenseItem component
                             <div class='col-sm'>
                                 <ExpenseItem />
                                   </div>
                        }        

                        {
                            
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
