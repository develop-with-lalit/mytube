import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //   console.log(isMenuOpen);

  if (!isMenuOpen) {
    return null;
  }

  return (
    <div className="p-4 shadow-lg col-span-1">
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Gaming</li>
      </ul>
    </div>
  );
};

export default Sidebar;
