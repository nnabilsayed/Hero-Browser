"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "crypto-js/md5";
import { HeroInterface } from "@/Components/HeroHomePage";
import Image from "next/image";
import heroImage from "@/app/assets/hero2.webp";
import ResponisveCard from "@/Components/ResponisveCard";

interface ParamsType {
  id: number;
}
export type CardImage = {
  im: string;
};
const HeroDetailsPage = ({ params }: { params: ParamsType }) => {
  const [hero, setHero] = useState<HeroInterface | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const Public_Key = "a64c9cfe26c263d6239dcca71a8789a1";
    const private_Key = "22778776b7bbbeb7ca520da5f4ba1262c048b673";
    const baseUrl = `https://gateway.marvel.com/v1/public/characters/${params.id}`;

    const generateAuthParams = () => {
      const ts = new Date().getTime().toString();
      const hash = md5(`${ts}${private_Key}${Public_Key}`).toString();
      return `?ts=${ts}&apikey=${Public_Key}&hash=${hash}`;
    };

    const fetchData = async () => {
      const authParams = generateAuthParams();
      try {
        const response = await axios.get(`${baseUrl}${authParams}`);
        setHero(response.data.data.results[0]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [params.id]);

  const imageSrc = hero?.thumbnail
    ? `${hero.thumbnail.path}.${hero.thumbnail.extension}`
    : "";

  return (
    <div className="">
      <Image
        width={3000}
        src={heroImage}
        alt="image"
        className="flex justify-center  p-10"
      />
      <div className="flex justify-center items-center h-screen text-white">
        <div className="bg-black ">
          {loading ? (
            <span className="loading loading-spinner loading-lg "></span>
          ) : (
            <div className="max-h-screen overflow-hidden">
              <h2 className="text-7xl text-center font-bold p-4">Hero Card</h2>

              <ResponisveCard
                id={hero?.id ?? 0}
                description={
                  hero?.description !== undefined && hero.description !== ""
                    ? hero.description
                    : "No description for this hero"
                }
                series={hero?.series || "No series for this hero"}
                name={hero?.name ?? ""}
                im={imageSrc}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroDetailsPage;
