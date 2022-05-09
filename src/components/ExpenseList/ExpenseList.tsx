import { ChangeEvent, useEffect, useState } from 'react';
import { useExpenseContext } from '../../context/ExpensesContext/ExpensesContext';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import Search from '../Search/Search';
import { StyledExpenseList } from './styles';

const ExpenseList = () => {
    const { expenses } = useExpenseContext();

    const [filteredExpenses, setFilteredExpenses] = useState(expenses);
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        setFilteredExpenses(
            expenses.filter(expense =>
                expense.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
            )
        );
    };

    useEffect(() => {
        setFilteredExpenses(
            expenses.filter(expense =>
                expense.name.toLowerCase().includes(searchValue.toLowerCase())
            )
        );
    }, [expenses, searchValue]);

    return (
        <StyledExpenseList>
            <Search handleSearch={handleSearch} searchValue={searchValue} />
            {filteredExpenses.length > 0 ? (
                filteredExpenses.map(expense => {
                    return <ExpenseItem expense={expense} key={expense.id} />;
                })
            ) : (
                <p>Oooops 🙈</p>
            )}
        </StyledExpenseList>
    );
};

export default ExpenseList;
