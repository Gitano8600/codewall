import React, { useState } from 'react';
import { StyledModal, ContentWrapper, CodeContent, AttributeContent, ButtonWrapper } from './Modal.styled';
import { StandardButton } from '../../style/buttons' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import moment from 'moment';
import { deleteSnippet } from '../../store/actions/snippetActions';
import Code from './Code'

const Modal = (props) => {
    const {snippet, selectedSnippet, setSelectedSnippet, editable, setEditable} = props;
    const [deletable, setDeletable] = useState(false);
    const timedClose = () =>{
      setTimeout(function(){setSelectedSnippet(null)}, 500);
    }

    const handleDelete = (event) => {
      event.preventDefault();
      props.deleteSnippet({
        id: selectedSnippet,
      });
      props.setSelectedSnippet(null);
  }

    if (snippet) {
        return  (
    <StyledModal>
        <ContentWrapper>
          <AttributeContent>
            <span>{snippet.topic}: {snippet.title}</span>
            <p>{moment(snippet.createdAt.toDate()).calendar()}</p>
            <article>Description: {snippet.description}</article>
          </AttributeContent>
          <CodeContent>
            <Code code={snippet.example} language={snippet.topic.toLowerCase()}/>
          </CodeContent>
        </ContentWrapper>
        <ButtonWrapper>
          {!editable && !deletable &&
          <>
            <StandardButton onClick={() => setEditable(!editable)}>edit</StandardButton>
            <StandardButton onClick={() => setDeletable(!deletable)}>delete</StandardButton>
            <StandardButton class='close' onClick={timedClose}>close</StandardButton>
          </>
          }
          {editable &&
          <>
            <StandardButton>submit</StandardButton>
            <StandardButton onClick={() => setEditable(!editable)}>discard</StandardButton>
          </>
          }
          {deletable &&
          <>
            <StandardButton onClick={handleDelete}>confirm</StandardButton>
            <StandardButton onClick={() => setDeletable(!deletable)}>cancel</StandardButton>
          </>
          }
        </ButtonWrapper>
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