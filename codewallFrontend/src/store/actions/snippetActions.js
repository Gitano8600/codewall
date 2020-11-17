export const createSnippet = (snippet) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
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