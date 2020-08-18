import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <section className="nav-logo">
        <i className="fas fa-coffee" />
        <h1 className="logo-header">Morning Roast Coffee</h1>
      </section>
      <section className="nav-left">
        <Link to="/home" className="nav-link">
          HOME
        </Link>
        <Link to="/menu" className="nav-link">
          OUR MENU
        </Link>
        <a
          href="https://store.bhappylounge.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          SHOP
        </a>
      </section>
      <section className="nav-right">
        <section className="nav-locations">
          <i className="fas fa-map-marker" />
          <a
            href="https://www.biggby.com/locations/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            FIND A STORE
          </a>
        </section>
        <button className="nav-btn">SIGN IN</button>
        <button className="nav-btn nav-btn-cart">
          <i className="fas fa-shopping-cart"></i>
          CART
        </button>
      </section>
    </nav>
  );
};

export default Nav;
