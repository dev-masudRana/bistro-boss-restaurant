const MenuItem = ({ item }) => {
  const { name, price, image } = item;
  return (
    <div className="flex gap-6">
      <div>
        <img
          className="w-[118px] h-[104px] rounded-b-[200px] rounded-tr-[200px]"
          src={image}
          alt={name}
        />
      </div>
      <div>
        <div className="flex justify-between text-xl">
          <h3 className="mb-2 uppercase">{name} -----------</h3>
          <p className="text-[#BB8506]">${price}</p>
        </div>
        <p>{item.recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
