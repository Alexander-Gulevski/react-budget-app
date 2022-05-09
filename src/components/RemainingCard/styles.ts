import styled from 'styled-components';

interface IStyles {
    isOverBudget: boolean;
}

export const StyledRemainingCard = styled.div<IStyles>`
    padding: 35px 20px;
    background: ${({ isOverBudget }) => (isOverBudget ? '#FF0000' : '#ccd5ff')};
    border-radius: 10px;
`;

export const Title = styled.p<IStyles>`
    font-weight: ${({ isOverBudget }) => (isOverBudget ? '700' : '500')};
    font-size: 20px;
    line-height: 24px;
    color: ${({ isOverBudget }) => (isOverBudget ? '#fff' : '#000')};
`;
