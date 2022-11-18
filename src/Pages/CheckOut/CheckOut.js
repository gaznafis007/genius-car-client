import React from "react";
import { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const navigate = useNavigate();
  const serviceItem = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price } = serviceItem;
  const handleOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = form.email.value;
    const message = form.message.value;
    const order = {
      serviceId: _id,
      customerName: name,
      phone,
      email,
      message,
      title,
    };
    fetch("https://genius-car-server-rho-tawny.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      });
  };
  return (
    <div>
      <h2 className="text-5xl text-center py-4">Confirm your {title} Order</h2>
      <button
        onClick={() => navigate("/myOrders")}
        className="btn btn-outline block mx-auto btn-success"
      >
        My orders
      </button>
      <form onSubmit={handleOrder} className="py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="phone"
            placeholder="Mobile No."
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="email"
            defaultValue={user?.email}
            placeholder="email"
            readOnly
            className="input input-bordered w-full"
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered my-4 w-full"
          placeholder="Your message"
        ></textarea>
        <input
          className="btn btn-outline btn-primary block mx-auto"
          type="submit"
          value="Place order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
