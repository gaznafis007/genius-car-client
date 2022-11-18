import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Orders from "./Orders";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch(
      `https://genius-car-server-rho-tawny.vercel.app/orders?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("geniusToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMyOrders(data);
      });
  }, [myOrders]);
  const handleUpdate = (order) => {
    fetch(
      `https://genius-car-server-rho-tawny.vercel.app/orders/${order._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "Approved" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myOrders.filter((odr) => odr._id !== order._id);
        const updated = myOrders.find((odr) => odr._id === order._id);
        const newOrders = [updated, ...remaining];
        setMyOrders(newOrders);
      });
  };
  const handleDelete = (order) => {
    fetch(
      `https://genius-car-server-rho-tawny.vercel.app/orders/${order._id}`,
      {
        method: "delete",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remaining = myOrders.filter((odr) => odr._id !== order._id);
        setMyOrders(remaining);
        // console.log(remaining);
      });
  };

  return (
    <div>
      <h2 className="text-4xl text-gray-600 text-center font-semibold">
        My orders
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto my-4">
        {myOrders.map((myOrder) => (
          <Orders
            key={myOrder._id}
            myOrder={myOrder}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></Orders>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
