import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title="our menu"></Cover>
      {/* offered menu */}
      <div className="mt-20">
        <SectionTitle
          subheading="Don't miss"
          heading="Today's Offer"
        ></SectionTitle>
      </div>
      <MenuCategory
        items={offered}
        btn="Order Your Favorite Food"
      ></MenuCategory>
      {/* desserts menu */}
      <MenuCategory
        items={desserts.slice(0, 6)}
        btn="Order Your Favorite Dessert"
        title="Desserts"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizzas.slice(0, 6)}
        btn="Order Your Favorite Pizza"
        title="Pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salads menu */}
      <MenuCategory
        items={salads}
        btn="Order Your Favorite Salad"
        title="Salad"
        coverImg={saladImg}
      ></MenuCategory>
      {/* soups menu */}
      <MenuCategory
        items={soups}
        btn="Order Your Favorite Soup"
        title="Soup"
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
