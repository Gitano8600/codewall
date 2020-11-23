import styled, { keyframes } from 'styled-components';
import { zoomInDown } from 'react-animations';

const bounceAnimation = keyframes`${zoomInDown}`;

export const WallContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
  animation: 1.5s ${bounceAnimation};
`;

export const SearchBox = styled.input`
margin: 25px 200px;
padding: 15px;
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
font-size: 25px;
font-family: 'DM Mono', monospace;
border-radius: 10px;
box-shadow: 1rem 1rem 1rem ${({ theme }) => theme.primaryDark};
border-color: ${({ theme }) => theme.primaryDark};
outline: none;

::placeholder {
  color: ${({ theme }) => theme.primaryLight};
  font-size: 25px;
  font-family: 'DM Mono', monospace;
}

`