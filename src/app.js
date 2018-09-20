import React, {Fragment, Component, createRef} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import Header from './components/header';

ReactDOM.render(
  <Header/>,
  document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
// if (module.hot) module.hot.accept('./App', () => render(App));
