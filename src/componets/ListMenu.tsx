import React from 'react';

function ListMenu() {
  return (
    <div className="bg-white w-full p-5 absolute top-0 left-0 z-10 ">
      <ul className="flex animate-fade-in space-y-2 flex-col my-auto font-Inter text-cinza font-medium sm:hidden md:space-x-32">
        <li className=" hover:text-red">
          <a href="id">inicio</a>
        </li>
        <li className=" hover:text-red">
          <a href="id">Cardápio</a>
        </li>
        <li className="text-cinza hover:text-red">
          <a href="id">Sobre</a>
        </li>
      </ul>
    </div>
  );
}

export default ListMenu;
