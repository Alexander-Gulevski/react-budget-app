import styled from 'styled-components';

export const StyledExpenseItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    padding: 15px 20px;
    border-bottom: 2px solid #ccd5ff;
`;

export const Title = styled.p`
    flex-grow: 1;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`;
