import React from "react";
import useCart from "../../../hooks/useMenu/useCart";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useMenu/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  //   console.log(cart[0]);
  const totalPrice = cart.reduce(
    (accumulator, currentItem) => accumulator + currentItem.price,
    0
  );

  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          //   console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl uppercase font-semibold">
          Total Orders: {cart.length}
        </h2>
        <h2 className="text-4xl uppercase font-semibold">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
        {cart.length ? (
          <Link to="/dashboard/payment">
            <button className="btn btn-primary uppercase text-white text-4xl font-semibold">
              Pay
            </button>
          </Link>
        ) : (
          <button
            disabled
            className="btn btn-primary uppercase text-white text-4xl font-semibold"
          >
            Pay
          </button>
        )}
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th className="uppercase">Image</th>
              <th className="uppercase">Name</th>
              <th className="uppercase">Price</th>
              <th className="uppercase">Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-500"></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
