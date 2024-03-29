// import Home from "./pages/Home/Home";
// import Login from "./pages/login/Login";
// import Profile from "./pages/profile/Profile";
// import Register from "./pages/register/Register";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "./context/AuthContext";

// function App() {
//   const { user } = useContext(AuthContext);
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/">
//           {user ? <Home /> : <Register />}
//         </Route>
//         <Route path="/login">{user ? <Redirect to="/" /> : <Login /> }</Route>
//         <Route path="/register">
//           {user ? <Redirect to="/" /> : <Register />}
//         </Route>
//         <Route path="/profile/:username">
//           <Profile />
//         </Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login /> }</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        {/* <Route path="/profile/:username">
          <Profile />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Home from "./pages/Home/Home";

// const App = () => {


//   return (
//     <div>
//       <Home/>
//     </div>
//   );
// };

// export default App;

