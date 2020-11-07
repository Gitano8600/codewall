import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style/global'
import { theme } from './style/theme'
import {ThemeProvider} from 'styled-components'
import {AppContainer} from './style/containers'
import { MenuComponent, WallComponent, SignIn, SignUp, CreateSnippet } from './components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
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
        </Switch>
        </AppContainer>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
