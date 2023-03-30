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
<<<<<<< HEAD
// import Profile from "./pages/profile/Profile";
=======
import Profile from "./pages/profile/Profile";
>>>>>>> 4444e246fb29724f74645199b4e4f13c74ae1964
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
<<<<<<< HEAD
          <Home />
          {/* {user ? <Home /> : <Register />} */}
=======
          <Home/>
>>>>>>> 4444e246fb29724f74645199b4e4f13c74ae1964
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login /> }</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
<<<<<<< HEAD
=======
        {/* <Route path="/profile/:username">
          <Profile />
        </Route> */}
>>>>>>> 4444e246fb29724f74645199b4e4f13c74ae1964
      </Switch>
    </Router>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import "./App.css";
// import Home from "./pages/Home/Home";
<<<<<<< HEAD
// import Csed from "./components/departments/Csed";
// import Cards from "./components/departments/Cards";
// import { StyledEngineProvider } from "@mui/material";

// // import { Card } from "@material-ui/core";
=======
>>>>>>> 4444e246fb29724f74645199b4e4f13c74ae1964

// const App = () => {


//   return (
//     <div>
<<<<<<< HEAD
//       {/* <Home/> */}
//       <Csed/>
      
=======
//       <Home/>
>>>>>>> 4444e246fb29724f74645199b4e4f13c74ae1964
//     </div>
//   );
// };

// export default App;

