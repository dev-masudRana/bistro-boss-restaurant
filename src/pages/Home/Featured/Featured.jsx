import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-container py-[100px] my-20 bg-fixed">
      <SectionTitle
        subheading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="flex items-center gap-16 px-[200px]">
        <div className="w-1/2">
          <img className="" src={featured} alt="" />
        </div>
        <div className="w-1/2 text-white">
          <p>March 20, 2025</p>
          <p className="uppercase">Where can I get some?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline btn-primary mt-5 border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
