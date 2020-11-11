import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style/global'
import { theme } from './style/theme'
import {ThemeProvider} from 'styled-components'
import {AppContainer} from './style/containers'
import { MenuComponent, WallComponent, SignIn, SignUp, CreateSnippet, EditSnippet } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from './config/fbConfig';

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import 'firebase/firestore';

const rrfConfig = { 
  userProfile: 'snippets',
  useFirestoreForProfile: true
}

const store = createStore(rootReducer, 
  compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebase)
  )  
);

const rffProps = {
  firebase,
  useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <AppContainer>
        <MenuComponent />
            <h1>codewall</  h1>
          <Switch>
            <Route exact path='/' component={WallComponent} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/createsnippet' component={CreateSnippet} />
            <Route path='/snippet/:id' component={EditSnippet} />
          </Switch>
          </AppContainer>
      </ThemeProvider>
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();