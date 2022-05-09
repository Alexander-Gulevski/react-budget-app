import { ChangeEvent, useState } from 'react';
import { useBudgetContext } from '../../context/BudgetContext/BudgetContext';
import { useCurrencyContext } from '../../context/CurrencyContext/CurrencyContext';
import { StyledBudgetCard, Title, Button, Input } from './styles';

const BudgetCard = () => {
    const [isEdit, setIsEdit] = useState(false);
    const [newBudget, setNewBudget] = useState('');
    const { budget, setBudget } = useBudgetContext();
    const { currency } = useCurrencyContext();

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNewBudget(e.target.value);
    };

    const handleSave = () => {
        setBudget(Number(newBudget));
        setIsEdit(false);
        setNewBudget('');
    };

    const handleEdit = () => {
        setIsEdit(true);
    };

    return (
        <StyledBudgetCard>
            {isEdit ? (
                <>
                    <Input
                        type="text"
                        placeholder="Enter budget ..."
                        value={newBudget}
                        onChange={handleInput}
                    />
                    <Button onClick={handleSave}>Save</Button>
                </>
            ) : (
                <>
                    <Title>
                        Budget: {currency} {budget}
                    </Title>
                    <Button onClick={handleEdit}>Edit</Button>
                </>
            )}
        </StyledBudgetCard>
    );
};

export default BudgetCard;
