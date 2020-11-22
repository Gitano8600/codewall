import styled from 'styled-components';

export const StyledModal = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  margin: 15px;
  display: flex;
`;
