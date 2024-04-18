import React from "react";

const CategoryButton = ({ name }) => {
  return (
    <button className="px-2 py-1 mx-2 font-bold bg-gray-200 rounded-lg hover:bg-gray-300">
      {name}
    </button>
  );
};

export default CategoryButton;
