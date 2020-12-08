import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { 
    WallContainer, 
    StyledNoteForm, 
    ContentWrapper, 
    InputWrapper, 
    SnippetAttributeContainer, 
    CodeContainer, 
    ButtonWrapper 
} from '../../../style/containers'
import { StandardButton} from '../../../style/buttons'
import { createSnippet } from '../../../store/actions/snippetActions';

const CreateSnippet = (props) => {
    const {history, createSnippet} = props
    const title = useRef('');
    const description = useRef('');
    const topic = useRef('');
    const example = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        createSnippet({
            title: title.current.value, 
            description: description.current.value, 
            topic: topic.current.value, 
            example: example.current.value
        });
        history.push('/');
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
                    <Link to="/">
                        <StandardButton>
                            Cancel
                        </StandardButton>
                    </Link>        
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