import React from 'react';
import Image from 'next/image';
import map from '../../public/img/map.png';
import mapmobile from '../../public/img/mapmobile.png';

function Location() {
  return (
    <div className="flex flex-col mb-14 items-center md:items-start md:w-full">
      <h4 className="font-semibold text-2xl mb-10 md:text-5xl md:mb-12">
        Localização
      </h4>
      <Image src={mapmobile} alt="mapa" className=" md:hidden" />
      <Image src={map} alt="mapa" className=" hidden md:block" />
    </div>
  );
}

export default Location;
