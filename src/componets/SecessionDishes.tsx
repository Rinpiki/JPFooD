import React from 'react';
import CardsDishe from './subcomponets/CardsDishe';
import prato1 from '../../public/img/prato1.png';
import prato2 from '../../public/img/prato2.png';
import prato3 from '../../public/img/prato3.png';

function SecessionDishes() {
  return (
    <div className="text-center mb-14 mt-[0px] md:mt-[100px]">
      <h3 className="font-semibold text-2xl mb-[100px] md:text-5xl">
        Mais populares
      </h3>
      <div className="grid grid-cols-1  gap-y-28 md:grid-cols-2 lg:grid-cols-3 md:gap-10 xl:gap-11">
        <CardsDishe
          image={prato1}
          title="Ramen de Frango"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <CardsDishe
          image={prato2}
          title="Ramen Apimentado"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
        <CardsDishe
          image={prato3}
          title="Ramen Tradicional"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          price="R$ 30"
        />
      </div>
    </div>
  );
}

export default SecessionDishes;
