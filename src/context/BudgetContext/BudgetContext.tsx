import { createContext, useContext, useState } from 'react';
import { IBudgetContext, IBudgetContextProviderProps } from './types';

const BudgetContext = createContext<IBudgetContext>({
    budget: 0,
    setBudget: (budget: number) => {},
});

const useBudgetProviderValue = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(() => ({
        budget: 2000,
        setBudget: (budget: number) => {
            setBudgetContext(ctx => ({ ...ctx, budget }));
        },
    }));

    return budgetContext;
};

export const useBudgetContext = () => useContext<IBudgetContext>(BudgetContext);

export const BudgetContextProvider = ({
    children,
}: IBudgetContextProviderProps) => {
    return (
        <BudgetContext.Provider value={useBudgetProviderValue()}>
            {children}
        </BudgetContext.Provider>
    );
};
