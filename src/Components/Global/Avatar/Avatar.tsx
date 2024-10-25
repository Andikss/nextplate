/** @format */

"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import { useTransition, animated, useSpring } from "@react-spring/web";
import { Download } from "lucide-react";
import { Tooltip } from "../Tooltip";

interface AvatarProps {
  url: string;
  username: string;
  openable?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  url,
  username,
  openable = false,
  size = "md",
  className = "",
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    if (openable) {
      setIsOpen(true);
    }
    if (onClick) {
      onClick();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const sizeClasses: Record<string, string> = {
    xs: "w-8 h-8",
    sm: "w-9 h-9",
    md: "w-11 h-11",
    lg: "w-16 h-16",
  };

  const transition = useTransition(isOpen, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 300 },
  });

  const imageSpring = useSpring({
    opacity: isOpen ? 1 : 0,
    scale: isOpen ? 1 : 0.7,
    config: { duration: 300 },
  });

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = url ? url : "/assets/static/img/default-avatar.png";
    link.download = `${username || username}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`relative shrink-0 ${sizeClasses[size]} ${className}`}>
      <img
        src={url}
        alt={username}
        loading="lazy"
        className="w-full h-full rounded-full cursor-pointer object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        onClick={handleImageClick}
        draggable={false}
      />
      {openable &&
        transition(
          (style, item) =>
            item &&
            createPortal(
              <animated.div
                style={style}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50"
                onClick={handleClose}
              >
                <animated.div
                  style={imageSpring}
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={url ? url : "/assets/static/img/default-avatar.png"}
                    alt={username}
                    loading="lazy"
                    className="max-h-[70vh] object-contain cursor-pointer"
                    draggable={false}
                  />
                  <div className="absolute top-4 left-4 text-2xl text-text transition-opacity duration-300 ease-in-out hover:opacity-70">
                    <Tooltip
                      position="bottom"
                      content={`Download ${username}'s avatar`}
                    >
                      <button onClick={handleDownload} title="Download">
                        <Download size={20} />
                      </button>
                    </Tooltip>
                  </div>

                  <div className="absolute top-4 right-4 text-2xl text-text transition-opacity duration-300 ease-in-out hover:opacity-70">
                    <Tooltip position="bottom" content="Close avatar">
                      <button onClick={handleClose}>✕</button>
                    </Tooltip>
                  </div>
                </animated.div>
              </animated.div>,
              document.body
            )
        )}
    </div>
  );
};
