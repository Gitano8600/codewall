import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
 
const bounceAnimation = keyframes`${fadeInUp}`;


export const StyledModal = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: 15px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .wobbler {
  animation: 1.5s ${bounceAnimation};

  span {
    font-weight: bold;
    font-size: 24px;
  }
  p {
    font-style: italic;
    margin-top: -1px;
  }
}`;

export const ContentWrapper = styled.div`
  flex-grow: 8;
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: flex-start;
`;

export const AttributeContent = styled.div`
  flex-grow: 1;
  padding: 1rem;
  color: ${({ theme }) => theme.primaryDark};
`;

export const CodeContent = styled.div`
  flex-grow: 3;
  padding: 1rem;
  background: #F5F2F0;
  margin-right: 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.primaryDark};
  border: 2px solid ${({ theme }) => theme.primaryDark};
`;

export const ButtonWrapper = styled.div`
`;
