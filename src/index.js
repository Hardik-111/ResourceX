import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home/Home';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
    <Home/>
  </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);