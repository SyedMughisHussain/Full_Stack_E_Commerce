import React, { useEffect, useState } from "react";
import moment from "moment";

const Order = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const response = await fetch(
      "https://full-stack-e-commerce-umber.vercel.app/api/getOrdersByUser",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "content-type": "application/json",
        },
      }
    );

    const responseData = await response.json();

    if (responseData.success) {
      setOrders(responseData.orders);
      console.log(responseData.orders);
    } else {
      console.log(responseData.message);
    }

    if (responseData.error) {
      console.log(responseData.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6 ml-5">Your Orders</h1>
      {orders.length === 0 ? (
        <p>Loading your orders...</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6">
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Order{order.id}</h2>
              <p className="text-gray-600">
                Placed on {moment(order.createdAt).format("LL")}
              </p>
            </div>
            <div className="mb-4">
              <p>
                <span className="font-semibold">Order Price:</span> $
                {order.orderPrice}
              </p>
              <p>
                <span className="font-semibold">Status:</span> {order.status}
              </p>
              <p>
                <span className="font-semibold">Address:</span> {order.address}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Order Items:</h3>
              <ul>
                {order.orderItems.map((item, index) => (
                  <li key={index} className="mb-2">
                    <span className="font-semibold">{item.productName}</span> -
                    Quantity: {item.quantity}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
