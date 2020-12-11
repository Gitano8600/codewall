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
            <Card key={index} onClick={() => props.setSelectedSnippet(note.id)}>
            <CardHeader>
              {note.title}
            </CardHeader>
            <br />
            <CardDescription>
              {note.description}
            </CardDescription>
          <LogoBox>
            # {note.topic}
              </LogoBox>          
          </Card>
        )})}

        </CardList>
      </StyledWall>
    )
  }
  Wall.propTypes = {
    serverData: array,
  }
  export default Wall;