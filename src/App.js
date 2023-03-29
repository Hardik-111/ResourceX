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

import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Departments} from "./components/dept";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      {/* <Features data={landingPageData.Features} /> */}
      {/* <Services data={landingPageData.Services} /> */}
      <Departments data={landingPageData.Departments} />
      <About data={landingPageData.About} />
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
