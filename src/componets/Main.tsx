import React from 'react';
import ImgMain from '../../public/img/mainphoto.png';
import Image from 'next/image';

function Main() {
  return (
    <div className="w-full flex mt-8 ">
      <div className=" mx-auto md:mx-0 sm:max-w-[405px] md:mr-auto sm:my-auto">
        <h1 className="text-3xl font-Montserrat font-semibold text-cinza mb-6 sm:text-5xl">
          Comida Oriental
        </h1>
        <p className="text-base mb-8 text-cinza font-Inter font-normal sm:text-2xl">
          A culinária Japonesa é bastante equilibrada, sendo muito rica em
          peixes (ômega 3), vegetais, massas e ingredientes frescos.
        </p>
        <button className="text-base font-bold text-white bg-red w-full py-[10px] border rounded-md sm:max-w-[292px] sm:text-2xl sm:py-[15px] ">
          Cardápio
        </button>
      </div>
      <div className="hidden md:block">
        <Image src={ImgMain} alt="sushi imagem de fundo" />
      </div>
    </div>
  );
}

export default Main;
