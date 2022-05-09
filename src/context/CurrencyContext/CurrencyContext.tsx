import { createContext, useContext, useState } from 'react';
import { Currency } from '../../types/Currencies';
import { ICurrencyContext, ICurrencyContextProviderProps } from './types';

const CurrencyContext = createContext<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (currency: Currency) => {},
});

const useCurrencyContextValue = () => {
    const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(
        () => ({
            currency: Currency.USD,
            setCurrency: (currency: Currency) => {
                setCurrencyContext(ctx => ({ ...ctx, currency }));
            },
        })
    );

    return currencyContext;
};

export const useCurrencyContext = () =>
    useContext<ICurrencyContext>(CurrencyContext);

export const CurrencyContextProvider = ({
    children,
}: ICurrencyContextProviderProps) => {
    return (
        <CurrencyContext.Provider value={useCurrencyContextValue()}>
            {children}
        </CurrencyContext.Provider>
    );
};
