import React, { useState } from 'react';
import { StyledModal } from './Modal.styled';
import { StandardButton } from '../../style/buttons' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment';
import { deleteSnippet } from '../../store/actions/snippetActions';
import { ThemeProvider } from 'styled-components';

const Modal = (props) => {
    console.log('in da modal props', props)
    const [editable, setEditable] = useState(false);
    const { snippet, selectedSnippet } = props;
    console.log('in da modal snippet', snippet)
    const timedClose = () =>{
      setTimeout(function(){props.setSelectedSnippet(null)}, 500);
    }

    const handleDelete = (event) => {
      event.preventDefault();
      props.deleteSnippet({
        id: selectedSnippet,
      });
      //props.history.push('/');
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
          {!editable &&
          <>
            <StandardButton onClick={() => setEditable(!editable)}>edit</StandardButton>
            <StandardButton onClick={handleDelete}>delete</StandardButton>
            <StandardButton class='close' onClick={timedClose}>close</StandardButton>
          </>
          }
          {editable &&
          <>
          <StandardButton>submit</StandardButton>
          <StandardButton onClick={() => setEditable(!editable)}>discard</StandardButton>
          </>
          }
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

const mapDispatchToProps = dispatch => {
  return {
      deleteSnippet: (id) => dispatch(deleteSnippet(id))
  }
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.selectedSnippet;
	return {
        snippet: state.firestore.data.snippets && state.firestore.data.snippets[id],
	};
};

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([ { collection: 'snippets' } ]))(Modal);