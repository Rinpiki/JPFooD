import React from 'react';
import review1 from '../../public/img/review1.png';
import review2 from '../../public/img/review2.png';
import FeedbackCards from './subcomponets/FeedbackCards';

function Feedback() {
  return (
    <div className="flex flex-col items-center md:items-start md:w-full md:mb-[70px]">
      <h4 className="font-semibold text-2xl mb-10 md:text-5xl md:mb-12">
        Comentários
      </h4>
      <div className=" md:flex justify-between w-full md:space-x-5">
        <FeedbackCards
          image={review1}
          name="Daniele Almeida"
          review="Ótimo serviço! Encantada com a qualidade dos pratos e dos copos."
        />
        <FeedbackCards
          image={review2}
          name="Ricardo França"
          review="Não é apenas a comida excelente, o serviço torna a experiência especial."
        />
      </div>
    </div>
  );
}

export default Feedback;
