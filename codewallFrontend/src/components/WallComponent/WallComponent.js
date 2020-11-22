import React, { useState } from 'react';
//import SearchBar from './SearchBar'
import { StyledSearchBar } from './SearchBar/SearchBar.styled';
import Wall from './Wall';
import Modal from '../Modal/Modal'
import { WallContainer, SearchBox } from './WallComponent.styled';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

//working directly in wall component, no separate Seach Bar necessary anymore

const WallComponent = (props) => {
  console.log('in da WALLCOMPONENT props', props)
  const {snippets, defaultSnippets, isAuth } = props;
  const [filterString, setFilterString] = useState([]);
  const [showSnippet, setShowSnippet] = useState(true);
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const searchHandler = (event) => {
    setFilterString(event.target.value.toLowerCase().split(/\s+/));
    console.log('name: ', event.target.name, ' value:', event.target.value)
    console.log('in da filterString', filterString)
  };

  if (selectedSnippet) {
    return (
      <WallContainer>
      <Modal 
      selectedSnippet={selectedSnippet}
      setSelectedSnippet={setSelectedSnippet}/>
      </WallContainer>
    )
  } else {
    return (
    <WallContainer>
    <SearchBox type="text" placeholder="Search..." onChange={searchHandler} />
    <Wall 
    serverData={snippets} 
    filterString={filterString} 
    defaultSnippets={defaultSnippets} 
    isAuth={isAuth}
    setSelectedSnippet={setSelectedSnippet}
    />
  </WallContainer>
  )
}
}

const mapStateToProps = (state) => {
  console.log('state in Wallcomponent', state)
  return {
    snippets: state.firestore.ordered.snippets,
    defaultSnippets: state.snippet.snippets,
    isAuth: state.firebase.auth.uid
  }
}

export default compose(
  connect(mapStateToProps),
    firestoreConnect((ownProps) => {
      console.log("OWNPROPS", ownProps);
      return [
        {
        collection: 'snippets',
        where: ['userId', '==', ... ownProps.isAuth ? [ownProps.isAuth] : [null]],
        orderBy: ['createdAt', 'desc'],
      },
    ]}),
    )(WallComponent);