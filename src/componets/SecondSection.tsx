import React from 'react';
import Image from 'next/image';
import imgPrato from '../../public/img/pratocomida.png';

function SecondSection() {
  return (
    <div className="block mt-12 w-full md:flex md:items-center md:mt-[100px] md:justify-between">
      <Image
        className="mb-12 mx-auto w-full md:w-[330px] h-[350px] lg:w-[480px] lg:h-[400px] xl:w-[604px] xl:h-[500px] md:mr-auto md:mx-0"
        src={imgPrato}
        alt="segurando um prato de comida"
        width={312}
        height={350}
      />

      <div className="text-center mb-14 md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] md:text-start">
        <h2 className="font-semibold text-2xl text-cinza mb-6 md:font-semibold lg:text-5xl md:leading-[130%]">
          Feita de forma Tradicional
        </h2>
        <p className="font-normal text-base font-Inter mb-6 md:font-normal lg:text-2xl lg:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a
          href="#"
          className="font-medium  text-base underline text-red md:font-medium lg:text-2xl"
        >
          Ler mais sobre o modo de preparo
        </a>
      </div>
    </div>
  );
}

export default SecondSection;
