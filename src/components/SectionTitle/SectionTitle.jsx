const SectionTitle = ({ heading, subheading }) => {
  return (
    <div className="text-center mb-12 w-4/12 mx-auto">
      <p className="text-[#D99904] italic text-xl mb-2">--- {subheading} ---</p>
      <h3 className="text-4xl py-5 border-y-2 border-gray-400 uppercase">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
