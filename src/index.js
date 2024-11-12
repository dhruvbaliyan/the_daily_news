import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/style.css'
import ReduxStore from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={ReduxStore()}>
      <Routes />
    </Provider>
    
  </React.StrictMode>
);

