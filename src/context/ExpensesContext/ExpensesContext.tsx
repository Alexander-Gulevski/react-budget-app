import { createContext, useContext, useState } from 'react';
import {
    IExpense,
    IExpensesContext,
    IExpensesContextProviderProps,
} from './types';
import { v4 as uuidv4 } from 'uuid';

const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    setNewExpense: (expense: IExpense) => {},
    deleteExpense: (id: string) => {},
});

const useExpensesContextValue = () => {
    const [curencyContext, setCurrencyContext] = useState<IExpensesContext>(
        () => ({
            expenses: [
                {
                    id: uuidv4(),
                    name: 'Продукты',
                    cost: 100,
                },
                {
                    id: uuidv4(),
                    name: 'Квартира',
                    cost: 1000,
                },
            ],
            setNewExpense: (expense: IExpense) => {
                setCurrencyContext(ctx => ({
                    ...ctx,
                    expenses: [...ctx.expenses, expense],
                }));
            },
            deleteExpense: (id: string) => {
                setCurrencyContext(ctx => ({
                    ...ctx,
                    expenses: ctx.expenses.filter(item => item.id !== id),
                }));
            },
        })
    );

    return curencyContext;
};

export const useExpenseContext = () =>
    useContext<IExpensesContext>(ExpensesContext);

export const ExpensesContextProvider = ({
    children,
}: IExpensesContextProviderProps) => {
    return (
        <ExpensesContext.Provider value={useExpensesContextValue()}>
            {children}
        </ExpensesContext.Provider>
    );
};
