import React from 'react';
import Image, { StaticImageData } from 'next/image';
import review1 from '../../../public/img/review1.png';
import stars from '../../../public/icon/stars.svg';

function FeedbackCards() {
  return (
    <div className="flex flex-col items-center text-center bg-[#F3F3F3] px-[22px] py-6 mb-7 rounded-lg">
      <Image
        src={review1}
        width={60}
        height={60}
        alt="perfil foto"
        className="mb-4"
      />
      <p className="mb-4 font-medium text-lg">Daniele Almeida</p>
      <span className="mb-2 font-normal text-base text-[#616161]">
        Ótimo serviço! Encantada com a qualidade dos pratos.
      </span>
      <Image src={stars} alt="perfil foto" />
    </div>
  );
}

export default FeedbackCards;
