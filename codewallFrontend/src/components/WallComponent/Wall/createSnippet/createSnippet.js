import React, { useRef, useState, useCallback } from 'react';
import { CreateSnippetContainer } from './createSnippet.styled';
import { WallContainer, StyledNoteForm, ContentWrapper, InputWrapper, InputWrapper2, SnippetAttributeContainer, CodeContainer, ButtonWrapper } from '../../../../style/containers'
import { StandardButton} from '../../../../style/buttons'
import { connect } from 'react-redux';
import { createSnippet } from '../../../../store/actions/snippetActions';
import { Link } from 'react-router-dom'

const CreateSnippet = (props) => {
    const title = useRef('');
    const description = useRef('');
    const topic = useRef('');
    const example = useRef('');
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSnippet({
            title: title.current.value, 
            description: description.current.value, 
            topic: topic.current.value, 
            example: example.current.value
        });
        props.history.push('/');
    }
    
    return (
        <WallContainer>
            <StyledNoteForm onSubmit={handleSubmit}>
                <ContentWrapper>
                    <SnippetAttributeContainer>
                        <InputWrapper>
                            <input type='text' placeholder='Title' ref={title}/>
                            <label>Title</label>
                        </InputWrapper>
                        <InputWrapper>
                            <input type='text' placeholder='Topic' ref={topic}/>
                            <label htmlFor='topic'>Topic</label>
                        </InputWrapper>
                        <InputWrapper extend>
                            <textarea placeholder="Describe
                            your code snippet as concise as possible.
                            The better your description the easier it's found.
                            " ref={description}/>
                            <label htmlFor='description'>Description</label>
                        </InputWrapper>
                    </SnippetAttributeContainer>
                    <CodeContainer>
                        <textarea placeholder='Your code...' ref={example}/>
                        <label htmlFor='example'>Your code...</label>
                    </CodeContainer>
                </ContentWrapper>
                <ButtonWrapper>
                    <StandardButton>Submit</StandardButton>
                    <StandardButton>
                        <Link to="/">
                            Cancel
                        </Link>        
                    </StandardButton>
                </ButtonWrapper>
            </StyledNoteForm>
        </WallContainer>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        createSnippet: (snippet) => dispatch(createSnippet(snippet))
    }
}

export default connect(null, mapDispatchToProps)(CreateSnippet);