import React from 'react';
import Image from 'next/image';
import imgPrato from '../../public/img/pratocomida.png';

function SecondSection() {
  return (
    <div className="block mt-12 ">
      <Image
        className="mb-12 mx-auto w-full h-[350px]"
        src={imgPrato}
        alt="segurando um prato de comida"
        width={312}
        height={350}
      />
      <div className="text-center mb-14">
        <h2 className="font-semibold text-2xl text-cinza mb-6">
          Feita de forma Tradicional
        </h2>
        <p className="font-normal text-base font-Inter mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </p>
        <a href="#" className="font-medium  text-base underline text-red">
          Ler mais sobre o modo de preparo
        </a>
      </div>
    </div>
  );
}

export default SecondSection;
