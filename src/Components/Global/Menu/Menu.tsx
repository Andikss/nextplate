/** @format */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import { MenuItemProps, MenuProps, Position } from "./MenuProps";
import { MenuItem } from "./Child";

export const Menu: React.FC<MenuProps & { position?: Position }> = ({
  items,
  children,
  position = "start",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "none";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, MenuItemProps[]>);

  const menuSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "scale(1)" : "scale(0.95)",
    config: config.stiff,
  });

  const flattenedItems = Object.values(groupedItems).flat();
  const trail = useTrail(flattenedItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0px)" : "translateY(20px)",
    config: config.stiff,
  });

  const getPositionStyle = () => {
    switch (position) {
      case "start":
        return { left: "0%" };
      case "center":
        return { left: "-180%" };
      case "end":
        return { left: "-360%" };
      default:
        return { left: "0%" };
    }
  };

  return (
    <div className="relative">
      <div ref={triggerRef} onClick={toggleMenu}>
        {children}
      </div>
      {isOpen && (
        <animated.div
          ref={menuRef}
          style={{
            ...menuSpring,
            ...getPositionStyle(),
            position: "absolute",
            zIndex: 50,
          }}
          className="bg-white shadow-lg rounded-md p-2 min-w-[200px] mt-2"
        >
          {Object.entries(groupedItems).map(
            ([category, categoryItems], categoryIndex) => (
              <div key={category} className="mb-0">
                {category !== "none" && (
                  <h3 className="text-sm font-semibold text-gray-500 mb-2">
                    {category}
                  </h3>
                )}
                <ul className="space-y-2">
                  {categoryItems.map((item, itemIndex) => (
                    <MenuItem
                      key={item.id}
                      item={item}
                      style={
                        trail[
                          categoryItems.reduce(
                            (acc, _, i) => acc + (i < itemIndex ? 1 : 0),
                            categoryIndex
                          )
                        ]
                      }
                    />
                  ))}
                </ul>
              </div>
            )
          )}
        </animated.div>
      )}
    </div>
  );
};
