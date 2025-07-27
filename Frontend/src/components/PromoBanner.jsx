import React from "react";

const PromoBanner = () => {
  return (
    <div className="flex justify-center items-center w-full px-4 md:px-0 py-10 md:pt-60 md:pb-20">
      <div className="bg-[#f7f5f0] text-black py-10 px-6 md:px-20 border-2 border-gray-300 rounded-xl max-w-6xl mx-auto relative ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 space-y-6 ">
            <h2 className="text-5xl font-bold leading-tight text-center md:text-start">
              WANNA KNOW US ?
            </h2>
            <p className="text-lg text-gray-600">
              Welcome to Trybe 🫡 Not Just a Brand, a Culture. We’re more than
              fabric and threads — we’re a movement stitched in boldness,
              confidence, and raw authenticity. Born on the streets, made for
              the rebels, dreamers, and misfits. Whether you're rocking
              oversized tees or layering up in cargos, everything we make is for
              those who break the rules and write their own style story.
            </p>
          </div>

          <div className="hidden md:block">
            <img
              src={"/model.png"}
              alt="Model in trench coat"
              className="w-[38%] rounded-xl absolute right-0 bottom-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
