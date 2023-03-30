import "./csed.css"

// import "./home.css"
import React, { useState, useEffect } from "react";
// import { Navigation } from "/components/navigation";

// import { Features } from "./components/features";

// import { Testimonials } from "./components/testimonials";

import JsonData from "../../data/data.json";
import SmoothScroll from "smooth-scroll";
import { Navigation } from "../../components/Navigation";
import { Team } from "../../components/Team";
import { Contact } from "../../components/Contact";
import { About } from "../../components/About";
import { Header } from "../../components/Header";
import { Resources } from "./CsFiles";
// import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
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
      <Resources data={landingPageData.Resources} />
      {/* <About data={landingPageData.About} /> */}
      {/* <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Home;