import { Image } from "../Image";
import React from "react";
import Cards from "./Cards"
import { StyledEngineProvider } from "@mui/material";

export const Resources = () => {
    const cards = [
        { title: 'Mountain View', copy: 'Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains', button: 'View Trips' },
        { title: 'To The Beach', copy: 'Plan your next beach trip with these fabulous destinations', button: 'View Trips' },
        { title: 'Desert Destinations', copy: 'It\'s the desert you\'ve always dreamed of', button: 'Book Now' },
        { title: 'Explore The Galaxy', copy: 'Seriously, straight up, just blast off into outer space today', button: 'Book Now' }
      ];
      
      const Card = ({ title, copy, button }) => (
        <div className="card">
          <div className="content">
            <h2 className="title">{title}</h2>
            <p className="copy">{copy}</p>
            <button className="btn">{button}</button>
          </div>
        </div>
      );
      
      

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Resources</h2>
          <p>
            Explore all the resources related to CSE Department at one place.
            One Stop Destination for all your study needs!
          </p>
        </div>
        <div className="row1">
        <StyledEngineProvider injectFirst>

            <div className="card1">

            <Cards />
            </div>
            {/* <Cards />
            <Cards />
            <Cards /> */}
            <div className="card2">

            <Cards />
            </div>
            <div className="card3">

            <Cards />
            </div>
            <div className="card4">

            <Cards />
            </div> 
           
            

        </StyledEngineProvider>
            

            {/* <div className="card">

        <div className="card" style={{width: '18rem'}}>
  <img className="card-img-top1" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <img className="card-img-top2" src="..." alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <img className="card-img-top3" src="http://commondatastorage.googleapis.com/codeskulptor-assets/lathrop/asteroid_blue.png" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  <img className="card-img-top4" src="/img/02-small.jpg" height="40px" width="40px" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
  </div>

</div> */}
        </div>
      </div>
    </div>
  );
};
