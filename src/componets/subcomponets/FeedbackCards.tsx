import React from 'react';
import Image, { StaticImageData } from 'next/image';
import stars from '../../../public/icon/stars.svg';

interface CardProps {
  name: string;
  review: string;
  image: StaticImageData;
}

function FeedbackCards({ name, review, image }: CardProps) {
  return (
    <div className="flex flex-col max-w-[600px] items-center text-center bg-[#F3F3F3] px-[22px] py-6 mb-7 rounded-lg md:py-10 md:px-[40px] md:items-start md:text-start lg:rounded-2xl">
      <Image
        src={image}
        width={120}
        height={120}
        alt="perfil foto"
        className="mb-4 md:w-[120px] md:h-[120px] md:mb-6"
      />
      <p className="mb-4 font-medium text-lg md:text-[32px]">{name}</p>
      <span className="mb-2 font-normal text-base font-Inter text-[#616161] md:text-2xl md:mb-4">
        {review}
      </span>
      <Image src={stars} alt="perfil foto" />
    </div>
  );
}

export default FeedbackCards;
