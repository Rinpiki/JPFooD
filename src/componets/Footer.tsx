import React from 'react';

function Footer() {
  return (
    <div className="flex flex-col mb-14 w-full md:flex-row md:justify-center">
      <h5 className="font-Montserrat mb-8 text-cinza font-bold text-3xl sm:text-[32px] md:mr-[51px] md:text-[40px]">
        Food<span className="text-red">JP</span>
      </h5>
      <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] gap-x-5 md:grid-rows-none md:grid-cols-[repeat(3,1fr)] lg:gap-x-40">
        <div className="font inter flex flex-col text-cinza">
          <p className="text-base leading-[123%] mb-4 font-Popines md:font-medium md:text-[32px]">
            Contato
          </p>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">
            +55 21 9999-9999
          </span>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">
            email@gmail.com
          </span>
        </div>
        <div className="font inter flex flex-col text-cinza">
          <p className="text-base leading-[130%] mb-4 font-Popines md:font-medium md:text-[32px]">
            Serviços
          </p>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">Entrega</span>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">Retirada</span>
        </div>
        <div className="font inter flex flex-col text-cinza">
          <p className="text-base leading-[123%] mb-4 font-Popines md:font-medium md:text-[32px]">
            Sobre nós
          </p>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">Menu</span>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">Valores</span>
          <span className="mb-2 text-sm lg:text-lg lg:leading-8">
            Pagina principal
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
