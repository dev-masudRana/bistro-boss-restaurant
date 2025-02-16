import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useMenu/useAuth";
import useAxiosSecure from "../../../hooks/useMenu/useAxiosSecure";
import {
  FaCar,
  FaDollarSign,
  FaProductHunt,
  FaTruck,
  FaUsers,
  FaWallet,
} from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow flex gap-5 my-6">
        <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] text-white">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-3xl text-white"></FaDollarSign>
          </div>
          <div className="stat-title text-white">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
          <div className="stat-desc text-white">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] text-white">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl text-white"></FaUsers>
          </div>
          <div className="stat-title text-white">Customers</div>
          <div className="stat-value text-white">{stats?.users}</div>
          <div className="stat-desc text-white">↗︎ 400 (22%)</div>
        </div>

        <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9] text-white">
          <div className="stat-figure text-secondary">
            <AiFillProduct className="text-3xl text-white" />
          </div>
          <div className="stat-title text-white">Products</div>
          <div className="stat-value text-white">{stats?.menuItems}</div>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
        <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#AAF7FA] text-white">
          <div className="stat-figure text-secondary">
            <FaTruck className="text-3xl text-white"></FaTruck>
          </div>
          <div className="stat-title text-white">Orders</div>
          <div className="stat-value text-white">{stats?.orders}</div>
          <div className="stat-desc text-white">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
