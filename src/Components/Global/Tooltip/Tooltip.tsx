/** @format */

"use client";

import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useSpring, animated } from "@react-spring/web";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

type TooltipPosition = "top" | "right" | "bottom" | "left";

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<PopperInstance | null>(null);

  const springProps = useSpring({
    opacity: isVisible ? 1 : 0,
    config: { duration: 200 },
  });

  useEffect(() => {
    if (!triggerRef.current || !tooltipRef.current) return;

    popperInstanceRef.current = createPopper(
      triggerRef.current,
      tooltipRef.current,
      {
        placement: position,
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, 8],
            },
          },
          {
            name: "preventOverflow",
            options: {
              padding: 8,
            },
          },
        ],
      }
    );

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [position]);

  useEffect(() => {
    if (isVisible && popperInstanceRef.current) {
      popperInstanceRef.current.update();
    }
  }, [isVisible]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {createPortal(
        <animated.div
          ref={tooltipRef}
          style={{
            ...springProps,
            display: springProps.opacity.to((o) =>
              o === 0 ? "none" : "block"
            ),
            pointerEvents: isVisible ? "auto" : "none",
          }}
          className="z-[9999] bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {content}
        </animated.div>,
        document.body
      )}
    </>
  );
};
