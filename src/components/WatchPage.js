import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseMenu } from "../utils/store/appSlice";
import { useSearchParams } from "react-router-dom";
import { clearCache } from "../utils/store/searchSlice";

const WatchPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    dispatch(collapseMenu());
    dispatch(clearCache());
  }, []);

  return (
    <div className="col-span-12 m-4 p-2">
      <iframe
        width="1400"
        height="700"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
