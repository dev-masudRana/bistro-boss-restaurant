import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, btn, title, coverImg }) => {
  return (
    <div className="my-20">
      <div className="mb-16">
        {title && <Cover img={coverImg} title={title}></Cover>}
      </div>
      <div className="grid grid-cols-2 gap-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline btn-primary mt-5 border-0 border-b-4">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
