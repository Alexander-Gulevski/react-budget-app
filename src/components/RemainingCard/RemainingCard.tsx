import { useBudgetContext } from '../../context/BudgetContext/BudgetContext';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpenseContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledRemainingCard, Title } from './styles';

const RemainingCard = () => {
    const { budget } = useBudgetContext();
    const { currency } = useCurrencyContext();
    const { expenses } = useExpenseContext();

    const remaining =
        budget - expenses.reduce((total, { cost }) => total + cost, 0);

    const isOverBudget = remaining < 0;

    return (
        <StyledRemainingCard isOverBudget={isOverBudget}>
            <Title isOverBudget={isOverBudget}>
                {isOverBudget
                    ? `Overspending by  
                    ${currency} ${Math.abs(remaining)}`
                    : `Remaining: ${currency} ${remaining}`}
            </Title>
        </StyledRemainingCard>
    );
};

export default RemainingCard;
