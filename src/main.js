import React from 'react';
import ReactDom from 'react-dom';
import App from './app';
// import App from './appLazy';

// let hr = React.createElement('hr');
// let div = React.createElement('div', {className:'test'}, [hr]);

ReactDom.render(<App />, document.querySelector('#app'));