import React, { useState } from 'react';
//import SearchBar from './SearchBar'
import { StyledSearchBar } from './SearchBar/SearchBar.styled';
import Wall from './Wall';
import { WallContainer, SearchBox } from './WallComponent.styled';
import { connect } from 'react-redux';

//working directly in wall component, no separate Seach Bar necessary anymore

const WallComponent = (props) => {
  console.log('in da props', props)
  const { snippets } = props;
  const [filterString, setFilterString] = useState([]);
  const searchHandler = (event) => {
    setFilterString(event.target.value.toLowerCase().split(/\s+/));
    console.log('name: ', event.target.name, ' value:', event.target.value)
    console.log('in da filterString', filterString)
  };

  return (
  <WallContainer>
    <SearchBox type="text" placeholder="Search..." onChange={searchHandler} />
    <Wall serverData={snippets} filterString={filterString} />
  </WallContainer>
  )
}

const mapStateToProps = (state) => {
  return {
    snippets: state.snippet.snippets
  }
}

export default connect(mapStateToProps)(WallComponent);