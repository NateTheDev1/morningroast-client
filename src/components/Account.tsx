import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Account.css";
import { useHistory } from "react-router-dom";
import { fetchOrders } from "../actions/user";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from "@material-ui/core";

import Moment from "react-moment";

const Account = () => {
  const user = useSelector((state: any) => state.globalReducer.user);
  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(fetchOrders(user));
  }, [dispatch]);

  if (user === null) {
    history.push("/");
  }

  if (!user.orders) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="account-root">
      {user !== null && (
        <>
          <h1>Here Are Your Orders {user.username}</h1>
          <hr className="orders-divider" />
          <TableContainer className="orders-table-root" component={Paper}>
            <Table
              stickyHeader
              className="orders-table"
              aria-label="Your Orders"
              size="medium"
            >
              <TableHead className="order-headers">
                <TableCell>id</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Total</TableCell>
                <TableCell>When</TableCell>
              </TableHead>
              <TableBody>
                {user.orders.map((order: any) => (
                  <TableRow key={order.id}>
                    <TableCell component="th" scope="row">
                      {order.id}
                    </TableCell>
                    <TableCell>{order.order_info}</TableCell>
                    <TableCell>${order.total}</TableCell>
                    <TableCell>
                      <Moment fromNow>{order.when}</Moment>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default Account;
