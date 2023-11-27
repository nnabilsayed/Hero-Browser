import React from "react";
import { YoutubeInterface } from "./HeroHomePage";

const Youtube = ({ title, description, id, cast }: YoutubeInterface) => {
  const safeDescription = description || ""; // Or any default value you prefer

  return (
    <div className="video-container  pb-8 justify-center flex flex-col items-center">
      <iframe
        className=""
        title="YouTube Video"
        width="680"
        height="450"
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="text-center">
        <h2 className="text-2xl font-bold pt-3">{title}</h2>
        <h2 className="text-xl font-bold">
          Description:{" "}
          <span className="text-lg font-normal">{safeDescription}</span>
        </h2>
        <h2 className="text-xl font-bold">
          Cast: <span className="text-lg font-normal">{cast}</span>
        </h2>
      </div>
    </div>
  );
};

export default Youtube;
