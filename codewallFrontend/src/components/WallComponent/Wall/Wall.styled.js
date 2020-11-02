import styled from 'styled-components';

export const StyledWall = styled.div`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  margin: 15px;
`;

export const CardList = styled.section`
  background: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
  display: flex;
  overflow-x: hidden; /*use scroll when below is active*/
  padding: 2.5rem 1rem 1rem 1rem;
  border-radius: 16px;
  height: 500px;
  /*
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    margin-top: 5px;
    }

  ::-webkit-scrollbar-thumb {
    background: #201c29;
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0,0%,100%,.25), inset -2px -2px 2px rgba(0,0,0,.25);
    }
  
  ::-webkit-scrollbar-track {
    background: linear-gradient(90deg,#201c29,#201c29 1px,#17141d 0,#17141d);
    }
*/
`;

export const Card = styled.article`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;

  border-radius: 16px;
  background: ${({ theme }) => theme.primaryDark};
  box-shadow: -0.25rem 0 1rem #000;

  transition: .4s;

  &:hover {
    transform: translateY(-1rem);
    }
  
  &:hover~& {
    transform: translateX(130px);
  }
    
  &:not(:first-child) {
    margin-left: -130px;
    }

`;

export const LogoBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 75px 1fr;
  align-items: center;
  margin: 3rem 0 0;
`;

export const CardHeader = styled.header`
  font-size: 20px;
  margin: .25rem 0 auto;
  text-decoration: none;
  color: ${({ theme }) => theme.primaryLight};
  border: 0;
  display: inline-block;
  cursor: pointer;

  &:hover {
    background: linear-gradient(90deg,#cf8d00,#ff5500);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    }
`
export const CardDescription = styled.article`
  color: ${({ theme }) => theme.primaryLight};
`


export const HalfCircle = styled.svg`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 48px;
  fill: none;
  stroke: ${({ theme }) => theme.primaryLight};
  stroke-width: 8;
  stroke-linecap: round;
  pointer-events: none;
`;

export const LanguageLogo = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  filter: grayscale(100%);
  display: block;
  overflow: hidden;
  margin: 16px 10px;

  &:hover {
    filter: none;
  }

`;