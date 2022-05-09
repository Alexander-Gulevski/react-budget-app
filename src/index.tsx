import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BudgetContextProvider } from './context/BudgetContext/BudgetContext';
import { CurrencyContextProvider } from './context/CurrencyContext/CurrencyContext';
import { ExpensesContextProvider } from './context/ExpensesContext/ExpensesContext';
import { GlobalStyles } from './GlobalStyles';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyles />
        <ExpensesContextProvider>
            <CurrencyContextProvider>
                <BudgetContextProvider>
                    <App />
                </BudgetContextProvider>
            </CurrencyContextProvider>
        </ExpensesContextProvider>
    </React.StrictMode>
);
