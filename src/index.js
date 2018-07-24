import React from 'react';
import ReactDOM from 'react-dom';
import Admin from './admin';
import Router from './pages/route_demo/route2/router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
