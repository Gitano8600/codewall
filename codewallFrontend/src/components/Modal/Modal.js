import React from 'react';
import { StyledModal } from './Modal.styled';
import { StandardButton } from '../../style/buttons' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment';

const Modal = (props) => {
    const { snippet } = props;
    const timedClose = () =>{
      setTimeout(function(){props.setSelectedSnippet(null)}, 500);
    }
    if (snippet) {
        return  (
    <StyledModal>
      <div>
        <div class='wobbler'>
          <div>
            <span>{snippet.topic}: {snippet.title}</span>
            <p>{moment(snippet.createdAt.toDate()).calendar()}</p>
            <article>Description: {snippet.description}</article>
            <article>Sample: {snippet.example}</article>
          </div>
          <div>
          </div>
        </div>
          <StandardButton>edit</StandardButton>
          <StandardButton>delete</StandardButton>
          <StandardButton class='close' onClick={timedClose}>close</StandardButton>
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