import { AppContainer } from 'react-hot-loader';

import * as React from 'react';
import { render } from 'react-dom';
import { AppRouter } from './router';
import 'office-ui-fabric-react/dist/css/fabric.css'

// Get the root element from the HTML
const rootEl = document.getElementById('app');

// Tell Typescript that there is a global variable called module - see below
declare var module: { hot: any };

// And render our Menu into it, inside the HMR Menu ontainer which handles the hot reloading
render(
  <AppContainer>
    <AppRouter />
  </AppContainer>,
  rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
  module.hot.accept(['./containers/App'], () => {
    // If we receive a HMR request for our Menu container, then reload it using require (we can't do this dynamically with import)
    const NextApp = require('./containers/App');

    // And render it into the root element again
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl
    );
  })
}