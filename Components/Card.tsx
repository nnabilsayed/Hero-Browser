import React, { FC } from "react";
import { HeroInterface } from "./HeroHomePage";
import Link from "next/link";
export interface CardProps extends HeroInterface {
  className?: string;
}
const Card: FC<CardProps> = ({
  id,
  name,
  thumbnail,
  description,
  className,
}) => {
  const imageUrl = thumbnail ? `${thumbnail.path}.${thumbnail.extension}` : "";

  return (
    <Link className={className} href={`/${id}`}>
      <div key={id} className="text-center text-white">
        <div className="flex justify-center">
          <img
            className=" h-64 w-64 object-cover rounded-3xl mt-10  mask mask-squircle"
            src={imageUrl}
            alt={name}
          />
        </div>
        <h3 className="text-black text-2xl">{name}</h3>
        <h2 className="text-xl">{description}</h2>
      </div>
    </Link>
  );
};

export default Card;
