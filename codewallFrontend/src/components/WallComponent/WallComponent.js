import React, { useState } from 'react';
//import SearchBar from './SearchBar'
import { StyledSearchBar } from './SearchBar/SearchBar.styled';
import Wall from './Wall';
//import Modal from '../Modal/Modal'
import ViewSnippet from './Wallcomponents/viewSnippet';
import { WallContainer, SearchBox, Ground } from './WallComponent.styled';
import EditSnippet from '../WallComponent/Wallcomponents/editSnippet'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { AddButton } from '../../style/buttons'
import { Link } from 'react-router-dom';

//working directly in wall component, no separate Seach Bar necessary anymore

const WallComponent = (props) => {
  console.log('in da WALLCOMPONENT props', props)
  const {snippets, defaultSnippets, isAuth } = props;
  const [editable, setEditable] = useState(false);
  const [filterString, setFilterString] = useState([]);
  const [showSnippet, setShowSnippet] = useState(true);
  const [selectedSnippet, setSelectedSnippet] = useState(null);
  const searchHandler = (event) => {
    setFilterString(event.target.value.toLowerCase().split(/\s+/));
    console.log('name: ', event.target.name, ' value:', event.target.value)
    console.log('in da filterString', filterString)
  };

  if (selectedSnippet && !editable) {
    return (
      <WallContainer>
      <ViewSnippet
      selectedSnippet={selectedSnippet}
      setSelectedSnippet={setSelectedSnippet}
      editable={editable}
      setEditable={setEditable}/>
      </WallContainer>
    )
  } else if (selectedSnippet && editable) {
    return (
      <WallContainer>
        <EditSnippet 
        selectedSnippet={selectedSnippet}
        editable={editable}
        setEditable={setEditable}/>
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
    <Ground><Link to="/createsnippet"><AddButton>+</AddButton></Link></Ground>
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