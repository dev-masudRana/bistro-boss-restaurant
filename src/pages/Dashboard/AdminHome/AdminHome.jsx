import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useMenu/useAuth";
import useAxiosSecure from "../../../hooks/useMenu/useAxiosSecure";
import { FaDollarSign, FaTruck, FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Legend,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "skyblue"];

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      // console.log(res.data);
      return res.data;
    },
  });

  const { data: chartData = [] } = useQuery({
    queryKey: ["order-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/order-stats");
      return res.data;
    },
  });

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  // custom pie chart
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const pieChartData = chartData.map((data) => {
    return { name: data.category, value: data.revenue };
  });

  return (
    <div>
      <h2 className="text-3xl">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow flex gap-5 mt-6 mb-12">
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
      <div className="flex gap-10 justify-between">
        {/* bar chart */}
        <div className="w-1/2">
          <BarChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis />
            <Bar
              dataKey="quantity"
              fill="#8884d8"
              shape={<TriangleBar />}
              label={{ position: "top" }}
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % 5]} />
              ))}
            </Bar>
          </BarChart>
        </div>

        {/* pie chart */}
        <div className="w-1/2">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
