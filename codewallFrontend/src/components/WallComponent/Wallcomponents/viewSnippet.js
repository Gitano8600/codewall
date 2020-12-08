import React, { useState } from 'react';
import { StyledNoteForm, SnippetAttributeContainer, InputWrapper, CodeContainer, ButtonWrapper, ContentWrapper} from '../../../style/containers'
import { StandardButton } from '../../../style/buttons' 
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { deleteSnippet } from '../../../store/actions/snippetActions';
import Code from './Code'

const ViewSnippet = (props) => {
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
    <StyledNoteForm>
        <ContentWrapper>
          <SnippetAttributeContainer>
              <InputWrapper>
                <input type='text' value={snippet.title}/>
                <label>Title</label>
              </InputWrapper>
              <InputWrapper>
                <input type='text' value={snippet.topic}/>
                <label>Topic</label>               
              </InputWrapper>
              <InputWrapper extend>
                <textarea value={snippet.description}/>
                <label>Description</label>
              </InputWrapper>
          </SnippetAttributeContainer>
          <CodeContainer>
            <Code code={snippet.example} language={snippet.topic.toLowerCase()}/>
            <label>Your code...</label>
          </CodeContainer>
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
    </StyledNoteForm>
    )
    } else {
        return (
        <StyledNoteForm>
            <div>
                <p>Loading project...</p>
            </div>
        </StyledNoteForm>
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

export default compose(connect(mapStateToProps, mapDispatchToProps), firestoreConnect([ { collection: 'snippets' } ]))(ViewSnippet);