import styled from 'styled-components';

export const StyledButton = styled.button`
    transition: transform 0.3s ease;

    &:hover {
        transform: scaleX(1.1);

        & svg line {
            stroke: #000;
        }
    }
`;
