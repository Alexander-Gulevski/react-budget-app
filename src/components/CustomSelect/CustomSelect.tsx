import Select from 'react-select';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { Currency } from '../../types/Currencies';

export type CurrencyOption = {
    label: keyof typeof Currency;
    value: Currency;
};

const CustomSelect = () => {
    const { currency, setCurrency } = useCurrencyContext();

    const currencies: CurrencyOption[] = [
        { value: Currency.USD, label: 'USD' },
        { value: Currency.EUR, label: 'EUR' },
        { value: Currency.GBR, label: 'GBR' },
    ];

    const handleSelect = (option: CurrencyOption | null) => {
        if (option) {
            setCurrency(option.value);
        }
    };

    const getDefaultOption = () => {
        return currencies.find(({ value }) => value === currency);
    };

    return (
        <Select
            options={currencies}
            defaultValue={getDefaultOption()}
            onChange={handleSelect}
        />
    );
};

export default CustomSelect;
