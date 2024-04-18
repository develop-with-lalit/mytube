import React from "react";
import CategoryButton from "./CategoryButton";

const ButtonList = () => {
  const categoryList = [
    { name: "All", id: 1 },
    { name: "JavaScript", id: 2 },
    { name: "Computer Programming", id: 3 },
    { name: "Music", id: 4 },
    { name: "Resume", id: 5 },
    { name: "Study Skills", id: 6 },
    { name: "TED", id: 7 },
  ];

  return (
    <div className="flex">
      {categoryList.map((category) => {
        return <CategoryButton name={category?.name} key={category?.id} />;
      })}
    </div>
  );
};

export default ButtonList;
