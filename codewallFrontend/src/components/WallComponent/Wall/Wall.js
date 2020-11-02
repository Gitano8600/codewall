import React from 'react';
import { StyledWall, CardList, Card, LogoBox, CardHeader, CardDescription, LanguageLogo, HalfCircle } from './Wall.styled';
import python from "../../../assets/python.svg"
import { array } from 'prop-types';


const Wall = ( props ) => {
  let notesToRender = props.serverData.filter(notes =>
    props.filterString.every(word => 
      (notes.description + ' ' + notes.title)
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
        {notesToRender.map((note, index) => {
          return (
          <Card key={index}>
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