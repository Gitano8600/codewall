 import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { EditSnippetContainer } from './editSnippet.styled';
import moment from 'moment';

const EditSnippet = (props) => {
  const { snippet } = props;
  if (snippet) {
    return (
      <EditSnippetContainer>
        <div>
          <div>
            <span>Title: {snippet.title}</span>
            <p>Description: {snippet.description}</p>
            <p>Sample: {snippet.example}</p>
            <p>Topic: {snippet.topic}</p>
          </div>
          <div>
            <div>Created by {snippet.userName}</div>
            <p>{moment(snippet.createdAt.toDate()).calendar()}</p>
          </div>
        </div>
      </EditSnippetContainer>
    )
  } else {
    return (
      <EditSnippetContainer>
        <p>Loading project...</p>
      </EditSnippetContainer>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	return {
        snippet: state.firestore.data.snippets && state.firestore.data.snippets[id],
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'snippets' } ]))(EditSnippet);