import { ReactNode } from 'react';
import { Currency } from '../../types/Currencies';

export interface ICurrencyContextProviderProps {
    children: ReactNode;
}

export interface ICurrencyContext {
    currency: Currency;
    setCurrency: (currency: Currency) => void;
}
