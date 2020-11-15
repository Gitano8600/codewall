import React from 'react';
import { StyledWall, CardList, Card, LogoBox, CardHeader, CardDescription, LanguageLogo, HalfCircle } from './Wall.styled';
import python from "../../../assets/python.svg"
import { array } from 'prop-types';
import { Link } from 'react-router-dom';


const Wall = ( props ) => {
  const snippets = props.isAuth && props.serverData ? props.serverData : props.defaultSnippets;

  const notesToRender = snippets.filter(notes =>
    props.filterString.every(word => 
      (notes.description + ' ' + notes.title + notes.topic)
      .toLowerCase()
      .includes(word))
      )

  // INITAL CODE
  //let notesToRender = props.serverData.filter(notes =>
  //  notes.description.toLowerCase().includes(
  //    props.filterString.toLowerCase())
  //)
  
  return (
      <StyledWall>
        <CardList>
        {notesToRender && notesToRender.slice(0, 10).map((note, index) => {
          return (
            <Card key={index}>
              <Link to={'/snippet/' + note.id}>
            <CardHeader>
              {note.title}
            </CardHeader>
            <br />
            <CardDescription>
              {note.description}
            </CardDescription>
          <LogoBox>
            <LanguageLogo src={python}/>
              <HalfCircle viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
              </HalfCircle>
              {note.topic}
              </LogoBox>          
          </Link>
          </Card>
        )})}

        </CardList>
      </StyledWall>
    )
  }
  Wall.propTypes = {
    serverData: array.isRequired,
  }
  export default Wall;