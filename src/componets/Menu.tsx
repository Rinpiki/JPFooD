import React, { useState } from 'react';

import Image from 'next/image';
import Icon from '../../public/icon/menu.svg';
import xIcon from '../../public/icon/xicon.png';
import ListMenu from './ListMenu';

function Menu() {
  const [menu, setMenu] = useState(true);
  const [icon, setIcon] = useState(Icon);

  const handleClick = () => {
    setMenu(!menu);
    if (menu === true) {
      setIcon(xIcon);
    } else if (menu === false) {
      setIcon(Icon);
    }
  };
  return (
    <>
      <div className="z-30 sm:hidden">
        <Image
          onClick={handleClick}
          className="sm:hidden"
          priority
          src={icon}
          alt="title"
          width={24}
          height={24}
        />
      </div>
      {menu ? null : <ListMenu />}
    </>
  );
}

export default Menu;
