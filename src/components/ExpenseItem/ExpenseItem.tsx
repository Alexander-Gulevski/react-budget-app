import { useExpenseContext } from '../../context/ExpensesContext/ExpensesContext';
import { IExpense } from '../../context/ExpensesContext/types';
import Badge from '../Badge/Badge';
import CloseButton from '../CloseButton/CloseButton';
import { StyledExpenseItem, Title } from './styles';

interface IProps {
    expense: IExpense;
}

const ExpenseItem = ({ expense }: IProps) => {
    const { deleteExpense } = useExpenseContext();

    const handleDeleteItem = () => {
        deleteExpense(expense.id);
    };

    return (
        <StyledExpenseItem>
            <Title>{expense.name}</Title>
            <Badge cost={expense.cost} />
            <CloseButton handleDeleteItem={handleDeleteItem} />
        </StyledExpenseItem>
    );
};

export default ExpenseItem;
