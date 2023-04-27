import React from 'react';
import Image from 'next/image';
import location from '../../public/icon/location.svg';
import search from '../../public/icon/search.svg';

function InputLocation() {
  return (
    <div className="flex items-center w-full mb-14 md:mb-[100px]">
      <div className=" flex w-full max-w-[450px] mx-auto md:max-w-[700px]">
        <div className="flex w-full max-w-[600px] items-center border-2 py-[8px] px-4 rounded-l-lg border-[#292929]">
          <Image
            src={location}
            alt="icone de local"
            className="w-5 h-5 mr-3 md:w-[30px] md:h-[30px]"
          />
          <input
            type="text"
            placeholder="Localização para entrega"
            className="w-full font-Inter text-xs md:text-2xl leading-[123%]"
          />
        </div>
        <button className="bg-red flex items-center p-3 rounded-r-lg md:py-5 md:px-[51px]">
          <Image
            src={search}
            width={20}
            height={20}
            alt="icone de pesquisa"
            className="w-5 h-5 md:hidden"
          />
          <span className=" hidden font-Inter text-white text-2xl leading-[123%] md:block">
            BUSCAR
          </span>
        </button>
      </div>
    </div>
  );
}

export default InputLocation;
