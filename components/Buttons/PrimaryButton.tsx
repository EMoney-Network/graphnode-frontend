import React, { FC } from "react";

// type PrimaryButtonProps = {
//   props: ;
// };

const PrimaryButton = ({ ...props }) => {
  return (
    <button
      className="px-5 py-2.5 bg-gradient-to-r rounded-xl  from-[#1C6BF5] to-[#1E45B4] border-[#1853C6] font-semibold text-white text-lg focus:outline-none focus:ring-2 focus:ring-blue-600 
      focus:ring-opacity-50"
      type="button"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default PrimaryButton;
