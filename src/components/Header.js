import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/store/appSlice";

const Header = () => {
  const dispatch = useDispatch();

  const handleMenuToggle = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer"
          alt="menu-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          onClick={handleMenuToggle}
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4TdQa9xvFpj9ZPBKS2HlJauJZyVzqOuUI8ROCBMAX&s"
          />
        </a>
      </div>
      <div className="col-span-10 text-center px-10">
        <input
          className="w-1/2 p-2 border border-gray-200 rounded-l-full"
          type="text"
        />
        <button className="px-4 py-2  border border-gray-200 bg-gray-200 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8 text-right"
          alt="user-icon"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        />
      </div>
    </div>
  );
};

export default Header;
