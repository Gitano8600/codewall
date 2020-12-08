export const createSnippet = (snippet) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('snippets').add({
            ...snippet,
            userName: profile.userName,
            userId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SNIPPET', snippet });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SNIPPET_ERROR', err });
        })
    }
};

//WIP
export const editSnippet = (snippet) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('snippets').doc(snippet.id).set({
            ...snippet,
            title: snippet.title,
            topic: snippet.topic,
            example: snippet.example,
            description: snippet.description
        }).then(() => {
            dispatch({ type: 'EDIT_SNIPPET', snippet });
        }).catch((err) => {
            dispatch({ type: 'EDIT_SNIPPET_ERROR', err });
        })
    }
};

export const deleteSnippet = (id) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('snippets').doc(id.id).delete().then(() => {
            dispatch({ type: 'DELETE_SNIPPET'});
        }).catch((err) => {
            dispatch({ type: 'DELETE_SNIPPET_ERROR', err });
        })
    }
};