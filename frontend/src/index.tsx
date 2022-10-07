import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
