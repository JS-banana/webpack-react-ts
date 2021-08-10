import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.less';

// const MOUNT_NODE = document.getElementById('app') as HTMLElement;

ReactDOM.render(<App />, document.getElementById('root'));
// if (module.hot) {
//   // Hot reloadable translation json files
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept([], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     ReactDOM.render(<App />, document.getElementById('root'));
//   });
// }
