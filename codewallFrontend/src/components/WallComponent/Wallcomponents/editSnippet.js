import React, { useRef, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import {
    StyledNoteForm, 
    ContentWrapper, 
    InputWrapper,
    SnippetAttributeContainer, 
    CodeContainer, 
    ButtonWrapper } from '../../../style/containers'
import { StandardButton} from '../../../style/buttons'
import { editSnippet } from '../../../store/actions/snippetActions';

const EditSnippet = (props) => {
    const {snippet, selectedSnippet, editable, setEditable, editSnippet} = props;
    const [title, setTitle] = useState(snippet.title);
    const [topic, setTopic] = useState(snippet.topic);
    const [description, setDescription] = useState(snippet.description);
    const [example, setExample] = useState(snippet.example);

    const handleSubmit = (event) => {
        event.preventDefault();
        editSnippet({
            ...snippet,
            id: selectedSnippet,
            title: title, 
            description: description, 
            topic: topic, 
            example: example
        });
        setEditable(!editable);
    }
 
    return (
            <StyledNoteForm onSubmit={handleSubmit}>
                <ContentWrapper>
                    <SnippetAttributeContainer>
                        <InputWrapper>
                            <input type='text' defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
                            <label>Title</label>
                        </InputWrapper>
                        <InputWrapper>
                            <input type='text' defaultValue={topic} onChange={(e) => setTopic(e.target.value)}/>
                            <label htmlFor='topic'>Topic</label>
                        </InputWrapper>
                        <InputWrapper extend>
                            <textarea defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
                            <label htmlFor='description'>Description</label>
                        </InputWrapper>
                    </SnippetAttributeContainer>
                    <CodeContainer>
                        <textarea defaultValue={example} onChange={(e) => setExample(e.target.value)}/>
                        <label htmlFor='example'>Your code...</label>
                    </CodeContainer>
                </ContentWrapper>
                <ButtonWrapper>
                    <StandardButton>Submit</StandardButton>
                    <StandardButton onClick={() => setEditable(!editable)}>
                            Cancel      
                    </StandardButton>
                </ButtonWrapper>
            </StyledNoteForm>
    )

}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.selectedSnippet;
	return {
        snippet: state.firestore.data.snippets && state.firestore.data.snippets[id],
	};
};

const mapDispatchToProps = dispatch => {
    return {
        editSnippet: (snippet) => dispatch(editSnippet(snippet))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditSnippet);