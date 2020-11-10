import React, { useRef } from 'react';
import { CreateSnippetContainer } from './createSnippet.styled';
import { connect } from 'react-redux';
import { createSnippet } from '../../../../store/actions/snippetActions';

const CreateSnippet = (props) => {
    const title = useRef('');
    const description = useRef('');
    const topic = useRef('');
    const example = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.createSnippet({
            title: title.current.value, 
            description: description.current.value, 
            topic: topic.current.value, 
            example: example.current.value
        })  
    }

    return (
        <CreateSnippetContainer>
            <form onSubmit={handleSubmit}>
                <h5>Create new snippet</h5>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input type='text' ref={title}/>
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input type='text' ref={description}/>
                </div>
                <div>
                    <label htmlFor='topic'>Topic</label>
                    <input type='text' ref={topic}/>
                </div>
                <div>
                    <label htmlFor='example'>Snippet with an example</label>
                    <input type='text' ref={example}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </CreateSnippetContainer>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        createSnippet: (snippet) => dispatch(createSnippet(snippet))
    }
}

export default connect(null, mapDispatchToProps)(CreateSnippet);