const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <p className="bg-slate-900 text-white text-2xl font-semibold absolute right-6 top-4 px-2 py-1 rounded-md">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline btn-primary mt-5 border-0 border-b-4 border-orange-400">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
