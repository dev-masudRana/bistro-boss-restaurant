import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div className="my-20">
      <SectionTitle
        subheading="Popular Items"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="grid grid-cols-2 gap-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary mt-5 border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
