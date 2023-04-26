import React from 'react';
import FeedbackCards from './subcomponets/FeedbackCards';

function Feedback() {
  return (
    <div className="flex flex-col items-center">
      <h4 className="font-semibold text-2xl mb-10">Comentários</h4>
      <FeedbackCards />
      <FeedbackCards />
    </div>
  );
}

export default Feedback;
