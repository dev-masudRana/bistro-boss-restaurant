import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import drinksImg from "../../../assets/menu/soup-bg.jpg";
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
  const drinks = menu.filter((item) => item.category === "drinks");

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
        items={desserts}
        btn="Order Your Favorite Dessert"
        title="dessert"
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu */}
      <MenuCategory
        items={pizzas}
        btn="Order Your Favorite Pizza"
        title="pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salads menu */}
      <MenuCategory
        items={salads}
        btn="Order Your Favorite Salad"
        title="salad"
        coverImg={saladImg}
      ></MenuCategory>
      {/* soups menu */}
      <MenuCategory
        items={soups}
        btn="Order Your Favorite Soup"
        title="soup"
        coverImg={soupImg}
      ></MenuCategory>
      {/* drinks menu */}
      <MenuCategory
        items={drinks}
        btn="Order Your Favorite Drink"
        title="drinks"
        coverImg={drinksImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
