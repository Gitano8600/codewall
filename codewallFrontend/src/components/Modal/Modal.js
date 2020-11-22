import React from 'react';
import { StyledModal } from './Modal.styled';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment';

const Modal = (props) => {
    const { snippet } = props;
    if (snippet) {
        return  (
    <StyledModal>
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
          <button>edit</button>
          <button>delete</button>
          <button onClick={() => props.setSelectedSnippet(null)}>close</button>
        </div>
    </StyledModal>
    )
    } else {
        return (
        <StyledModal>
            <div>
                <p>Loading project...</p>
            </div>
        </StyledModal>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.selectedSnippet;
	return {
        snippet: state.firestore.data.snippets && state.firestore.data.snippets[id],
	};
};

export default compose(connect(mapStateToProps), firestoreConnect([ { collection: 'snippets' } ]))(Modal);