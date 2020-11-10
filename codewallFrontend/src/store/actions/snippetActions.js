export const createSnippet = (snippet) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('snippets').add({
            ...snippet,
            userName: 'Manuel',
            userId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_SNIPPET', snippet });
        }).catch((err) => {
            dispatch({ type: 'CREATE_SNIPPET_ERROR', err });
        })
    }
};