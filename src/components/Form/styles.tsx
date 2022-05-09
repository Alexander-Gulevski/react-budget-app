import styled from 'styled-components';

export const StyledForm = styled.form`
    display: grid;
    grid-gap: 30px;
`;

export const InputGroup = styled.div`
    display: grid;
    grid-gap: 20px;
`;

export const Input = styled.input`
    padding: 15px 20px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    &::placeholder {
        color: #999;
        font-size: 16px;
    }
`;
