import React from 'react';
import { StyledSearchBar } from './SearchBar.styled';

const SearchBar = (searchHandler, filterString, setFilterString) => {
  console.log(filterString.filterString)

  return (
    <StyledSearchBar>
      <input type="text" placeholder="Search..." onChange={setFilterString.setFilterString} />
        <button>Search</button>
    </StyledSearchBar>
  )
  }
  SearchBar.propTypes = {
  }
  export default SearchBar;