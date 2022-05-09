import { ReactNode } from 'react';

export interface IExpensesContextProviderProps {
    children: ReactNode;
}

export interface IExpensesContext {
    expenses: IExpense[];
    setNewExpense: (expenses: IExpense) => void;
    deleteExpense: (id: string) => void;
}

export interface IExpense {
    id: string;
    name: string;
    cost: number;
}
