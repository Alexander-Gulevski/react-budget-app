import styled from 'styled-components';

const StyledBudgetCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 35px 20px;
    background: #7cc6fe;
    border-radius: 10px;
`;

const Title = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
`;

const Input = styled.input`
    height: 35px;

    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;

    background: transparent;

    &::placeholder {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;

        color: #fff;
        opacity: 0.6;
    }
`;

const Button = styled.button`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #000000;

    padding: 10px 30px;
    background: #fff;
    border-radius: 10px;
`;

export { StyledBudgetCard, Title, Input, Button };
