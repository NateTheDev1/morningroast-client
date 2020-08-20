import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../actions/products";
import "./Menu.css";

const Menu = () => {
  const dispatch = useDispatch();
  const productsData: Array<Object> = useSelector(
    (state: any) => state.productsReducer.products
  );
  const loading: boolean = useSelector(
    (state: any) => state.globalReducer.loading
  );

  const [products, setProducts]: any = useState(productsData);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  function mapProducts() {}

  return (
    <div className="menu-root">
      <div className="menu-header"></div>
      <div className="menu-header-content">
        <h1>OUR MENU</h1>
        <p>
          From a Cuppa Joe to a Red Eye, we know that sometimes basic is best.
          Morning Roast Coffee® traditions are a classic cast of coffee,
          espresso, and tea options!
        </p>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Menu;
