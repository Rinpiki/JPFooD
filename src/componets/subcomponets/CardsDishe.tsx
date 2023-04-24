import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  price: string;
  image: StaticImageData;
}

function CardsDishe({ title, description, price, image }: CardProps) {
  return (
    <div className="w-[312px] bg-[#F3F3F3] rounded-lg relative">
      <Image
        src={image}
        width={209}
        height={209}
        alt="prato de comida"
        className="self-center absolute left-[17%] -top-10"
      />
      <div className="text-center w-[260px] mx-auto">
        <p className="font-medium text-2xl mb-4 mt-[202px] leading-[123%]">
          {title}
        </p>
        <span className="font-normal text-base mb-3 text-cinza leading-[160%] font-Inter ">
          {description}
        </span>
        <p className="font-normal text-[32.1029px] mt-4 mb-10 leading-10">
          {price}
        </p>
      </div>
    </div>
  );
}

export default CardsDishe;
