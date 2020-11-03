import styled from 'styled-components';

export const SignInContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 15px;
  border-radius: 10px;
`;