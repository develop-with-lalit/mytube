import React from "react";

const VideoCard = ({ info }) => {
  const {
    snippet: {
      channelTitle,
      title,
      publishedAt,
      thumbnails: {
        high: { url },
      },
    },
    statistics: { viewCount },
  } = info;

  return (
    <div className="m-2 p-2 w-72 rounded-lg shadow-lg hover:shadow-2xl h-[380px]">
      <img className="rounded-xl" alt="video-thumbnain" src={url} />
      <ul className="flex flex-col justify-between ">
        <li className="font-bold py-2">{title}</li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{viewCount} views</li>
        <li className="text-sm">{publishedAt}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
