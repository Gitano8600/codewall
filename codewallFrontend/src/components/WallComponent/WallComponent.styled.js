import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const bounceAnimation = keyframes`${fadeInUp}`;

export const WallContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  width: 70%;
  height: 70%;
  min-height: 720px;
  min-width: 1000px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  //padding: 15px;
  border-radius: 10px;
  animation: 1.5s ${bounceAnimation};
  position: relative;

  :before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  border-width: 0 45px 45px 0;
  border-style: solid;
  border-color: ${({ theme }) => theme.primaryLightShadow} ${({ theme }) => theme.primaryDark};
  display: block;
  width: 0;
  border-radius: 0 0 0 10px;
}

`;

export const SearchBox = styled.input`
margin: 25px 200px;
padding: 15px;
background: ${({ theme }) => theme.primaryDark};
color: ${({ theme }) => theme.primaryLight};
font-size: 25px;
font-family: 'DM Mono', monospace;
border-radius: 10px;
box-shadow: .5rem .5rem 1rem ${({ theme }) => theme.primaryDark};
border-color: ${({ theme }) => theme.primaryDark};
outline: none;

::placeholder {
  color: ${({ theme }) => theme.primaryLight};
  font-size: 25px;
  font-family: 'DM Mono', monospace;
}

`

export const Ground = styled.div`
  align-self: flex-end;
  padding-right: 2rem;
  padding-bottom: 2rem;
`

