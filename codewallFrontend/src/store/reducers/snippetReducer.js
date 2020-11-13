const initState = {
    snippets: [
        {id: 1, title: "Reverse a string", description: 'txt = "Hello World"[::-1]', topic: "Python"},
        {id: 2, title: "Repeat a string", description: "function repeat_string_num_times(str, num) {\n\n}", topic: "JavaScript"},
        {id: 3, title: "python code snippet 3", description: "seaborn data vizualization", topic: "Python"},
        {id: 4, title: "python code snippet 4", description: "numpy concatenante arrays", topic: "Python"},
        {id: 5, title: "ruby code snippet 1", description: "Ich mag Rubine", topic: "Ruby"},
        {id: 6, title: "ruby code snippet 2", description: "rails on ruby", topic: "Ruby"},
        {id: 7, title: "Javascript code snippet 1", description: "lorem ipsum and ternary operator", topic: "JavaScript"},
        {id: 8, title: "Javascript code snippet 3", description: "lorem ipsum and destructuring", topic: "JavaScript"},
        {id: 9, title: "Some CSS code snippet", description: "lorem ipsum and flex direction", topic: "CSS"},
        {id: 10, title: "My htmlcodesnippet", description: "lorem ipsum and radio button", topic: "HTML"},
        {id: 11, title: "My htmlcodesnippet 2", description: "lorem Manuel Rubine and radio button", topic: "HTML"},
    ]
}

const snippetReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_SNIPPET':
            console.log('created snippet', action.snippet);
            return state;
        case 'CREATE_SNIPPET_ERROR':
            console.log('create snippet error', action.err);
            return state;
        default:
            return state;
    }
};

export default snippetReducer;