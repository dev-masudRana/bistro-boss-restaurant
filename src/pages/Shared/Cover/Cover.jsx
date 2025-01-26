import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      //   strength={-200}
    >
      <div className="hero h-[700px]">
        <div className="text-center">
          <div className="bg-[#15151599] px-80 py-24 text-white mt-20">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 uppercase">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
