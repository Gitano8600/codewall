import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { GlobalStyle } from './style/global'
import { theme } from './style/theme'
import {ThemeProvider} from 'styled-components'
import {AppContainer} from './style/containers'
import { MenuComponent, WallComponent } from './components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
        <AppContainer>
        <MenuComponent />
          <h1>codewall</h1>
        <WallComponent />
        </AppContainer>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
