import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { StyledBadge } from './styles';

interface IProps {
    cost: number;
}

const Badge = ({ cost }: IProps) => {
    const { currency } = useCurrencyContext();

    return (
        <StyledBadge>
            {currency} {cost}
        </StyledBadge>
    );
};

export default Badge;
