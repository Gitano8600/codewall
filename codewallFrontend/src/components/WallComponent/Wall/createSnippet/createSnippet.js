import React, { useRef } from 'react';
import { CreateSnippetContainer } from './createSnippet.styled';

const CreateSnippet = () => {
    const title = useRef('');
    const description = useRef('');
    const topic = useRef('');
    const snippet = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('in da submit', title.current.value,
        description.current.value, 
        topic.current.value, 
        snippet.current.value);
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
                    <label htmlFor='snippet'>Snippet</label>
                    <input type='text' ref={snippet}/>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </CreateSnippetContainer>
    )

}

export default CreateSnippet;