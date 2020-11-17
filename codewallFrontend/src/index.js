import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style/global'
import { theme } from './style/theme'
import {ThemeProvider} from 'styled-components'
import {AppContainer} from './style/containers'
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider, useSelector, connect } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from './config/fbConfig';
import { isLoaded } from 'react-redux-firebase';
import Routes from './routes/routes';

import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';

import 'firebase/firestore';

const rrfConfig = { 
  userProfile: 'users',
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
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ReactReduxFirebaseProvider {...rffProps}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
          <AppContainer>
            <AuthIsLoaded>
        
              <Routes />
            </AuthIsLoaded>
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