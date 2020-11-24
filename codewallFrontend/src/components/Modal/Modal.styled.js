import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
 
const bounceAnimation = keyframes`${fadeInUp}`;


export const StyledModal = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  margin: 15px;
  padding: 1rem;
  display: flex;
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


  }
  
`;
