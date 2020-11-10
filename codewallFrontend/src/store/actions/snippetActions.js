export const createSnippet = (snippet) => {
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_SNIPPET', snippet });
    }
};