import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import { AuthContextProvider } from './context/AuthContext';
// import Home from './pages/Home/Home';
// import Login from './pages/login/Login';
// import Register from './pages/register/Register';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <AuthContextProvider>
//     {/* <Home/> */}
//     <Login/>
//     {/* <Register/> */}
//   </AuthContextProvider>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// serviceWorker.register();