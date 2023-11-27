"use client";
import { comicsData } from "./comicsData";

import HeroComic from "@/Components/HeroComic";
import React, { useEffect, useState } from "react";
const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredComics = comicsData.filter((comic) =>
    comic.character.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center">
        <HeroComic />
      </div>
      <div>
        <h2 className="text-center text-6xl font-bold text-white p-20 ">
          Trending Comics
        </h2>
        <div className="flex justify-center text-white">
          <label className="p-3 font-bold text-2xl" htmlFor="gsearch">
            Search for Comics
          </label>
          <input
            className="w-96 bg-white text-black text-lg p-4"
            type="search"
            id="gsearch"
            name="gsearch"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>

        <div className="flex justify-center p-20">
          <div className="grid grid-cols-4 gap-60">
            {filteredComics.map((comic) => {
              return (
                <div
                  key={comic.id}
                  className="bg-white rounded-3xl text-black hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer"
                >
                  <img className="w-96 rounded-3xl" src={comic.image} alt="" />
                  <div>
                    <h2 className="text-center text-2xl p-2">{comic.title}</h2>
                    <h2 className="text-center">#{comic.id}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
