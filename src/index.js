import React from 'react';
import ReactDOM from 'react-dom/client';
import LocalServiceWorkerRegister from './sw-register';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)
LocalServiceWorkerRegister();