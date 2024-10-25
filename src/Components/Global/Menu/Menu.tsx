/** @format */

"use client";

import React, { useState, useRef, useEffect, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { useSpring, useTrail, animated, config } from "@react-spring/web";

interface MenuItem {
  id: string;
  label: string;
  category?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

interface MenuProps {
  items: MenuItem[];
  children: ReactNode;
}

const MenuItem: React.FC<{ item: MenuItem; style: any }> = ({ item, style }) => {
  return (
    <animated.li 
      style={style}
      className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 rounded p-2"
      onClick={() => item.onClick && item.onClick()}
    >
      {item.icon && <item.icon size={18} />}
      <span>{item.label}</span>
    </animated.li>
  );
};

export const Menu: React.FC<MenuProps> = ({ items, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current && triggerRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const triggerRect = triggerRef.current.getBoundingClientRect();

      let top = triggerRect.bottom;
      let left = triggerRect.left;

      if (top + menuRect.height > window.innerHeight) {
        top = triggerRect.top - menuRect.height;
      }

      if (left + menuRect.width > window.innerWidth) {
        left = window.innerWidth - menuRect.width - 20;
      }

      menuRef.current.style.top = `${top}px`;
      menuRef.current.style.left = `${left}px`;
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "none";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const menuSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'scale(1)' : 'scale(0.95)',
    config: config.stiff,
  });

  const flattenedItems = Object.values(groupedItems).flat();
  const trail = useTrail(flattenedItems.length, {
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0px)' : 'translateY(20px)',
    config: config.stiff,
  });

  return (
    <>
      <div ref={triggerRef} onClick={toggleMenu}>
        {children}
      </div>
      {isOpen && (
        <animated.div
          ref={menuRef}
          style={{
            ...menuSpring,
            position: 'fixed',
            zIndex: 50,
          }}
          className="bg-white shadow-lg rounded-md p-2 min-w-[200px] mt-2"
        >
          {Object.entries(groupedItems).map(([category, categoryItems], categoryIndex) => (
            <div key={category} className="mb-0">
              {category !== 'none' && (
                <h3 className="text-sm font-semibold text-gray-500 mb-2">
                  {category}
                </h3>
              )}
              <ul className="space-y-2">
                {categoryItems.map((item, itemIndex) => (
                  <MenuItem 
                    key={item.id} 
                    item={item} 
                    style={trail[categoryItems.reduce((acc, _, i) => acc + (i < itemIndex ? 1 : 0), categoryIndex)]}
                  />
                ))}
              </ul>
            </div>
          ))}
        </animated.div>
      )}
    </>
  );
};
