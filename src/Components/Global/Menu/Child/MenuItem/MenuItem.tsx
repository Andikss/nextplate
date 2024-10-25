/** @format */

"use client";

import { animated } from "@react-spring/web";
import { MenuItemProps } from "../../MenuProps";

export const MenuItem: React.FC<{
  item: MenuItemProps;
  style: any;
}> = ({ item, style }) => {
  return (
    <animated.li
      style={{
        ...style,
      }}
      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded p-2"
      onClick={() => item.onClick && item.onClick()}
    >
      {item.icon && <item.icon size={18} />}
      <span>{item.label}</span>
    </animated.li>
  );
};
