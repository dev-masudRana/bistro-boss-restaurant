import {
  FaBook,
  FaCalendar,
  FaHome,
  FaSearch,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useMenu/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="text-white flex gap-20">
      <div className="w-72 min-h-screen bg-orange-400 p-5">
        <ul className="menu">
          <li>
            <NavLink
              to="/dashboard/userHome"
              className="flex items-center gap-2"
            >
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/reservation"
              className="flex items-center gap-2"
            >
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart" className="flex items-center gap-2">
              <FaShoppingCart />
              My Cart ({cart.length})
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review" className="flex items-center gap-2">
              <FaStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashboard/bookings"
              className="flex items-center gap-2"
            >
              <FaBook />
              My Bookings
            </NavLink>
          </li>
          <div className="divider divider-primary"></div>
          <li>
            <NavLink to="/" className="flex items-center gap-2">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad" className="flex items-center gap-2">
              <FaSearch />
              Menu
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="border flex-1 p-12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
