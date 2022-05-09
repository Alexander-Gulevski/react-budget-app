import styled from 'styled-components';
import BudgetCard from './components/BudgetCard/BudgetCard';
import CustomSelect from './components/CustomSelect/CustomSelect';
import ExpenseList from './components/ExpenseList/ExpenseList';
import Form from './components/Form/Form';
import RemainingCard from './components/RemainingCard/RemainingCard';
import Title from './components/Title/Title';
import TotalCard from './components/TotalCard/TotalCard';

const App = () => {
    return (
        <div>
            <Container>
                <Header>
                    <Title text="Budget App" />
                    <CustomSelect />
                </Header>
                <CardContainer>
                    <BudgetCard />
                    <RemainingCard />
                    <TotalCard />
                </CardContainer>
                <Title text="Expenses" />
                <ExpenseList />
                <Title text="Add Expense" />
                <Form />
            </Container>
        </div>
    );
};

export default App;

const Container = styled.div`
    display: grid;
    grid-gap: 30px;
    width: 90%;
    max-width: 700px;
    padding: 30px 0;

    margin: 0 auto;
`;

const CardContainer = styled.div`
    display: grid;
    grid-gap: 20px;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
`;
