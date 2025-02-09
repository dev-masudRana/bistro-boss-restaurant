import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useMenu/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useMenu/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // send menu item to database
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success modal
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} has been Added successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        subheading="What's New"
        heading="Add an item"
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Recipe Name*</span>
              </div>
              <input
                type="text"
                {...register("name")}
                placeholder="Recipe Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6 my-4">
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Select a Category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category")}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Select a Category
                  </option>
                  <option value="pizza">Pizza</option>
                  <option value="salad">Salad</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drink">Drink</option>
                </select>
              </label>
            </div>
            <div className="w-full">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price*</span>
                </div>
                <input
                  type="number"
                  {...register("price")}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <label className="form-control mb-4">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details:"
            ></textarea>
          </label>
          <div>
            <input
              {...register("image")}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn btn-outline mt-4">
            Add Item <FaUtensils></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
