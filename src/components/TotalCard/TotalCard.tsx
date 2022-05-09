import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { useExpenseContext } from '../../context/ExpensesContext/ExpensesContext';
import { StyledTotalCard, Title } from './styles';

const TotalCard = () => {
    const { expenses } = useExpenseContext();
    const { currency } = useCurrencyContext();

    const total = expenses.reduce((total, { cost }) => total + cost, 0);

    return (
        <StyledTotalCard>
            <Title>
                Spent so far: {currency} {total}
            </Title>
        </StyledTotalCard>
    );
};

export default TotalCard;
