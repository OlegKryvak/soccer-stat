import React from "react";
import { NavLink } from "react-router-dom";

type Props = {
  path: string;
  pathName: string
};

const NavItem = ({path, pathName}: Props) => {
  return (
    <li className="p-4">
      <NavLink
        to={path}
        className={({ isActive }) => (isActive ? "text-white dark:text-pink" : "text-black dark:text-beige")}
      >
        {pathName}
      </NavLink>
    </li>
  );
};

export default NavItem;
