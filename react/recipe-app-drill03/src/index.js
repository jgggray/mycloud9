import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import RecipeApp from './RecipeApp.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
registerServiceWorker();
