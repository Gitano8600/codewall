import styled, { keyframes } from 'styled-components';
import { headShake } from 'react-animations';

const hingeAnimation = keyframes`${headShake}`;

export const StandardButton = styled.button`
    font-family: 'DM Mono', monospace;
    margin: 1rem 1rem 1rem 0;
    color: ${({ theme }) => theme.primaryLight};
    background-color: ${({ theme }) => theme.primaryDark};
    border-radius: 8px;
    font-size: 18px;
    width: 120px;
    height: 40px;
    :focus {
        outline:0;
        }
`;

export const AddButton = styled.button`
    margin: 1rem 1rem 1rem 0;
    
    color: ${({ theme }) => theme.primaryLight};
    background-color: ${({ theme }) => theme.primaryDark};
    font-weight: bold;
    border-radius: 16px;
    font-size: 24px;
    width: 80px;
    height: 40px;
    :focus {
        outline:0;
        }
    :focus {
        animation: 1s ${hingeAnimation};
    }
`;
