import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import moment from "moment";

const AdminOrders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const getData = await fetch(
        "https://full-stack-e-commerce-delta.vercel.app/api/getAllOrders",
        {
          method: "GET",
          credentials: "include",
        }
      );

      const dataResponse = await getData.json();

      if (dataResponse.success) {
        setAllOrders(dataResponse.orders);
      } else {
        toast.error(dataResponse.message);
      }
    } catch (error) {
      toast.error("An error occurred while fetching orders.");
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="bg-white pb-4">
      <div className="bg-white py-2 px-4 flex justify-between items-center">
        <h2 className="font-bold text-lg">All Orders</h2>
      </div>
      <table className="w-full userTable">
        <thead>
          <tr className="bg-black text-white">
            <th>Sr.</th>
            <th>Order Price</th>
            <th>Customer Id</th>
            <th>Address</th>
            <th>Created Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {allOrders && allOrders.length > 0 ? (
            allOrders.map((el, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{el?.orderPrice}</td>
                <td>{el?.customer}</td>
                <td>{el?.address}</td>
                <td>{moment(el?.createdAt).format("LL")}</td>
                <td>{el?.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                No orders found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminOrders;
