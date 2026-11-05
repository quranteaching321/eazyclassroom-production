import React from "react";
import Link from "next/link";
import menu_data from './menu-data';
import Image from "next/image";

const NavMenu = () => {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.id === 6 ? "has-dropdown" : ""}`}>
            <Link
              className={`${item.id === 5 ? "eazy-ai-bg" : ""}`}
              href={item.link}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavMenu;