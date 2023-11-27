import React from "react";
import { HeroInterface } from "./HeroHomePage";
import { comicsData } from "@/app/comics/comicsData.js";
import { CardImage } from "@/app/[id]/page";
interface ResponisveCardProps {
  id: number;
  im: string;
  name: string;
  description?: string;
  series?: { items: { name: string }[] } | string;
}

const ResponisveCard: React.FC<ResponisveCardProps> = ({
  id,
  im,
  name,
  description,
  series,
}: CardImage & HeroInterface) => {
  const recommendedComics = comicsData.slice(0, 4);
  const safeDescription = typeof description === "string" ? description : "";
  const safeSeries =
    typeof series === "string" ? [series] : series?.items || [];
  const safeName = typeof name === "string" ? name : "";

  return (
    <div className="h-screen">
      <div className="card lg:card-side bg-red-700 shadow-xl p-3">
        <figure>
          <img src={im} alt="Album" height={1200} />
        </figure>
        <div className="card-body pt-14 rounded-3xl">
          <h2 className="card-title text-3xl">{safeName}</h2>
          <div className="">
            <h2 className="bg-white text-red-700 font-bold rounded-full w-32 p-2 pl-2 text-xl">
              Description
            </h2>
            <h2 className="max-w-2xl text-lg"> {safeDescription}</h2>
          </div>
          <h2 className="card-title">
            <span className="bg-white text-red-700 font-bold rounded-full w-32 p-2">
              Top Series
            </span>
          </h2>
          {Array.isArray(safeSeries) && safeSeries.length > 0 ? (
            <ul>
              {safeSeries.map(
                (item: { name: string } | string, index: number) => (
                  <li key={index}>
                    {typeof item === "string"
                      ? item
                      : (item as { name: string }).name}
                  </li>
                )
              )}
            </ul>
          ) : (
            <p>No series available</p>
          )}
        </div>
      </div>
      <h2 className="text-center text-5xl pt-4 font-bold">
        Recommended Comics
      </h2>
      <div className="grid grid-cols-4 gap-8 p-14 ">
        {recommendedComics.map((comic) => {
          return (
            <div
              key={comic.id}
              className=" rounded-3xl text-black hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer max-w-xs "
            >
              <div className="aspect-w-3 aspect-h-4 rounded-3xl overflow-hidden flex justify-center">
                <img
                  className="object-cover max-h-80 text-secondary rounded-3xl"
                  src={comic.image}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-center text-2xl p-2">{comic.title}</h2>
                <h2 className="text-center">#{comic.id}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResponisveCard;
