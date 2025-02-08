import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <SectionTitle
        subheading="What's New"
        heading="Add an item"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Food Selection:</label>
          <div className="mt-2">
            <select
              {...register("category")}
              className="select select-bordered w-full max-w-xs"
            >
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drink">Drink</option>
            </select>
          </div>

          <button className="btn btn-outline mt-4">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
