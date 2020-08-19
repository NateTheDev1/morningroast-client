import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="home-left">
        <h1>We believe that Everyone deserves to feel special.</h1>
        <p>
          Each and every Morning Roast Coffee® drink is made from scratch by our
          skilled baristas. Our ingredients are chosen with our fanatics in mind
          by a team of coffee enthusiasts. Let us help you find your Morning
          Roast Coffee drink today! Hand-crafted with love, by us for you!
        </p>
        <Link to="/menu" className="cta-btn">
          ORDER NOW
        </Link>
        <a
          href="https://biggby.com/category/covid/"
          className="covid-message"
          target="_blank"
          rel="noreferrer noopener"
        >
          Click Here For Information Regarding Morning Roast Coffee and COVID19
        </a>
      </section>
    </div>
  );
};

export default Home;
