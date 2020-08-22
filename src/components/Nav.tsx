import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector, useDispatch } from "react-redux";
import { LOGOUT } from "../actions/types";

const Nav = () => {
  const cartLength = useSelector((state: any) => state.cartReducer.cart.length);
  const user = useSelector((state: any) => state.globalReducer.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    if (user !== null) {
      dispatch({ type: LOGOUT });
    }
  };

  return (
    <nav className="nav">
      <section className="nav-inner">
        <section className="nav-left">
          <section className="nav-logo">
            <i className="fas fa-coffee" />
            <h1 className="logo-header">
              MORNING <span className="logo-header-middle">ROAST</span> COFFEE
            </h1>
          </section>
          <div
            className="nav-left-links"
            style={{
              justifyContent: user === null ? "space-around " : "",
            }}
          >
            <Link to="/" className="nav-link">
              HOME
            </Link>
            <Link to="/menu" className="nav-link">
              OUR MENU
            </Link>
            {user !== null && (
              <Link to="/account" className="nav-link">
                ACCOUNT
              </Link>
            )}
          </div>
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
          <div>
            <Link to="/cart" className="notification">
              CART
              {cartLength > 0 && <span className="badge">{cartLength}</span>}
            </Link>
          </div>

          <Link to={"/login"} onClick={handleLogout} className="nav-btn">
            {user === null ? "LOGIN" : "SIGN OUT"}
          </Link>
        </section>
      </section>
    </nav>
  );
};

export default Nav;
