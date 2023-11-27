"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import md5 from "crypto-js/md5"; // You may need to install this package
import Card from "./Card";
import Youtube from "./Youtube";
export type HeroInterface = {
  id: number;
  name: string;
  description?: string;
  thumbnail?: {
    path?: string;
    extension?: string;
  };
  stories?: {
    items: {
      name: string;
      resourceURI: string;
    }[];
  };
  series?: { items: { name: string }[] } | string;

  urls?: {
    type: string;
    url: string;
  }[];
};
export type YoutubeInterface = {
  title: string;
  description: string;
  id: any;
  cast: string;
};
const HeroHomePage = () => {
  const [character, setCharacter] = useState<HeroInterface[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const Public_Key = "a64c9cfe26c263d6239dcca71a8789a1";
    const private_Key = "22778776b7bbbeb7ca520da5f4ba1262c048b673";
    const baseUrl = "https://gateway.marvel.com/v1/public/characters";

    const generateAuthParams = () => {
      const ts = new Date().getTime().toString();
      const hash = md5(`${ts}${private_Key}${Public_Key}`).toString();
      return `?ts=${ts}&apikey=${Public_Key}&hash=${hash}`;
    };
    const fetchData = async () => {
      setIsLoading(true);

      const authParams = generateAuthParams();
      try {
        const response = await axios(`${baseUrl}${authParams}&limit=20`);
        setCharacter(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-16 p-32 bg-white rounded-3xl border-slate-950">
        <div className="col-span-2 grid grid-cols-5 gap-10 ">
          <div className="col-span-5 flex justify-center mb-8">
            <h2 className="font-bold text-black  text-6xl">Popular Heros</h2>
          </div>

          {loading ? (
            <div className="flex justify-center text-center text-black text-3xl">
              Loading
            </div>
          ) : (
            character.map((character) => (
              <div
                className="bg-[#FAFAFA] rounded-3xl text-center flex justify-center p-2 opacity-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300  shadow-xl h-96	"
                key={character.id}
              >
                <Card
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  thumbnail={character.thumbnail}
                  series={character.series} // Ensure character.series follows { items: { name: string }[] } | string structure
                ></Card>
              </div>
            ))
          )}
        </div>

        <div className=" text-black">
          <div className=" col-span-1 p-10 bg-white border border-slate-950 rounded-3xl mt-32">
            <h2 className="text-center text-2xl font-bold">
              Latest Marvel Movies
            </h2>
            {loading ? (
              <div className="flex justify-center text-center w-full">
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              <div className="rounded-2xl">
                <Youtube
                  id="s_76M4c4LTo"
                  title="Madame Web"
                  description="Madame Web is a clairvoyant and precognitive mutant who
                    first appears to help Spider-Man find a kidnapping victim.
                    She is not one of the mutants that lost their power during
                    the Decimation storyline."
                  cast=" Dakota Johnson, Sydney Sweeney, Celeste O'Connor, Isabela
                    Merced Tahar Rahim, Mike Epps, Emma Roberts, Adam Scott,
                    Zosia Mamet"
                />

                <Youtube
                  id="wS_qbDztgVY"
                  title="The Marvels"
                  description="Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see Carol shouldering the burden of a destabilized universe."
                  cast="Brie Larson, Teyonah Parris, Iman Vellani, Zawe Ashton, Park Seo-jun, Samuel L. Jackson, Gary Lewis, Zenobia Shroff, Mohan Kapur, Saagar Shaikh, Lashana Lynch, Leila Farzad, Abraham, "
                ></Youtube>
                <Youtube
                  id="Tp_YZNqNBhw"
                  title="Secret Invasions"
                  description="Nick Fury and Talos discover a faction of shapeshifting Skrulls who have been infiltrating Earth for years."
                  cast="Samuel L. Jackson, Ben Mendelsohn, Kingsley Ben-Adir, Killian Scott, Samuel Adewunmi, Dermot Mulroney, Emilia Clarke, Olivia Colman, Don Cheadle Charlayne"
                ></Youtube>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroHomePage;
