import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';
 
const bounceAnimation = keyframes`${fadeInUp}`;

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: relative;
`;

export const WallContainer = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  width: 70%;
  max-height: 70vh;
  min-height: 720px;
  min-width: 1000px;
  margin-left: 100px;
  display: flex;
  flex-direction: column;
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

export const StyledNoteForm = styled.form`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .wobbler {
  animation: 1.5s ${bounceAnimation};
  }`;


export const ContentWrapper = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  justify-content: flex-start;
`;

export const SnippetAttributeContainer = styled.div`
  flex-grow: 1;
  height:100%;
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1em;
`;

export const InputWrapper = styled.div`
      position: relative;
      display: flex;
      flex-direction: column;
      height: ${props => props.extend ? "100%": ""};
      width: 100%;
      input, textarea {
          font-family: 'DM Mono', monospace;
          background-color: ${({ theme }) => theme.primaryDark};
          border: 1px solid ${({ theme }) => theme.primaryLight};
          border-radius: 5px;
          color: ${({ theme }) => theme.primaryLight};
          padding: 1rem;
          margin-bottom: 1rem;

          outline: none;
          ::placeholder {
              color: ${({ theme }) => theme.primaryLight};
          }
      }
      input {
          height: 3rem;
      }
      textarea {
          height: 100%;
          resize: none;
      }
      label {
    /* Position the label */
    left: 8px;
    position: absolute;
    top: 0;
    font-size: 10px;
    border-radius: 3px;
    padding: 5px;
    color: ${({ theme }) => theme.primaryLight};

    /* Hide it by default */
    opacity: 0;
    transition: 'all 200ms',
}
    input:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
    background: ${({ theme }) => theme.primaryDark};
    transform: translate(0, -30%);
    opacity: 1;
    animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 333ms;
    
}

@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`

export const CodeContainer = styled.div`
  position: relative;
  flex-grow: 3;
  background: ${({ theme }) => theme.primaryDark};
  margin: 1em 1em 0 1em;
  margin-right: 2rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.primaryDark};
  textarea {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    outline: none;
    resize: none;
    font-family: 'DM Mono', monospace;
    background-color: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    border-radius: 5px;
    padding-top: 1rem;
    padding-left: 1rem;
    margin-bottom: 1rem;
    ::placeholder {
              color: ${({ theme }) => theme.primaryLight};
          }
  }
  label {
    /* Position the label */
    left: 8px;
    position: absolute;
    top: 0;
    font-size: 10px;
    border-radius: 3px;
    padding: 5px;
    color: ${({ theme }) => theme.primaryLight};

    /* Hide it by default */
    opacity: 0;
    transition: 'all 200ms',
}
    div:not(:placeholder-shown) + label,
    textarea:not(:placeholder-shown) + label {
    background: ${({ theme }) => theme.primaryDark};
    transform: translate(0, -30%);
    opacity: 1;
    animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 333ms;
    
}
`;

export const ButtonWrapper = styled.div`
`;