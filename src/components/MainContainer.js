import React from "react";
import ButtonList from "./ButtonList";
import VideosContainer from "./VideosContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 p-5">
      <ButtonList />
      <VideosContainer />
    </div>
  );
};

export default MainContainer;
