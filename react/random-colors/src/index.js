import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ColorApp from './ColorApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ColorApp />, document.getElementById('root'));
registerServiceWorker();
