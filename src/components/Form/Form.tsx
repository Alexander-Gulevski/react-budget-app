import SubmitButton from '../SubmitButton/SubmitButton';
import { StyledForm, InputGroup, Input } from './styles';
import { v4 as uuidv4 } from 'uuid';
import { useExpenseContext } from '../../context/ExpensesContext/ExpensesContext';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormValues = {
    name: string;
    cost: string;
};

const AddForm = () => {
    const { setNewExpense } = useExpenseContext();
    const { register, handleSubmit, reset } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = ({ name, cost }) => {
        const newExpense = {
            id: uuidv4(),
            name: name,
            cost: +cost,
        };
        setNewExpense(newExpense);
        reset();
    };

    return (
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <InputGroup>
                <Input
                    {...register('name', {
                        required: true,
                        maxLength: 10,
                        pattern: /[A-Z]/i,
                    })}
                    placeholder="name"
                />
                <Input
                    {...register('cost', {
                        required: true,
                        maxLength: 5,
                        pattern: /[0-9]/,
                    })}
                    placeholder="cost"
                />
            </InputGroup>
            <SubmitButton />
        </StyledForm>
    );
};

export default AddForm;
