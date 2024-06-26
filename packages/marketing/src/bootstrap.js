import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './Hello'

// Mount function to start up the app
const mount = (el) => {
 // ReactDOM.render(<h1>Hi there!</h1>, el);
 ReactDOM.render( <Hello/>, el);
};

// If we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}
// We are running through container
// and we should export the mount function
export { mount };
