import React from "react";

const App = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center gap-[24px] bg-[#F8F8F8] m-auto max-w-[1440px] h-auto lg:h-[348px]">
      <div className="flex flex-col flex-1 justify-center items-center gap-[24px] px-6 lg:px-20 text-center">
        <h2 className="flex font-family: var(--font-garamond) font-bold text-[#3A3845] text-[28px] uppercase">
          Up to 40% off our Christmas collection
        </h2>
        <p className="text-[#595667]">
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>
        <a href="#" className="font-bold text-[14px] underline uppercase">
          Shop now
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <img src="./src/img/tefshi.png" alt="christmas" />
      </div>
    </div>
  );
};

export default App;
// rightSide  lg:flex-1 lg:justify-center lg:items-center gap-[24px] text-center flex flex-col justify-center gap-[24px] bg-[#F8F8F8] w-full lg:w-full max-w-[430px] lg:max-w-[1440px] lg:h-[348px] min-h-[668px]
