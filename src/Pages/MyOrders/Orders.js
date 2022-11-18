import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = ({ myOrder, handleDelete, handleUpdate }) => {
  const navigate = useNavigate();
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{myOrder?.title}</h2>
        <p className="text-gray-300 font-semibold">{myOrder?.customerName}</p>
        <p className="my-2">Instruction/Message: {myOrder?.message}</p>
        <p className="my-2">Status: {myOrder?.status || "Pending"}</p>
        <div className="card-actions">
          <button
            onClick={() => navigate(`/services/${myOrder.serviceId}`)}
            className="btn btn-primary"
          >
            View service
          </button>
          <button
            onClick={() => handleDelete(myOrder)}
            className="btn btn-outline"
          >
            Delete this order
          </button>
          <button
            onClick={() => handleUpdate(myOrder)}
            className="btn btn-outline"
          >
            Approve this order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Orders;
