import React from "react";

const HeroComic = () => {
  return (
    <div
      className="hero min-h-screen "
      style={{
        backgroundImage:
          "url(https://www.komar.de/media/catalog/category/komar_fototapeten_header_Comic.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-white">
          <h1 className="mb-5 text-5xl font-bold">
            Hello there, Check out trending comics
          </h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComic;
