/** @format */

"use client";

import { useState } from "react";
import { IconComponent, Tooltip } from "@/Components/ui";
import { ChevronDown } from "lucide-react";
import { useSidebar } from "@/Contexts/Global";

interface NavigationGroupProps {
  title: string;
  icon: IconComponent;
  children: React.ReactNode;
  initialExpanded?: boolean;
}

export const NavigationGroup: React.FC<NavigationGroupProps> = ({
  title,
  children,
  icon: Icon,
  initialExpanded = false,
}) => {
  const { isCollapsed } = useSidebar();
  const [isExpanded, setIsExpanded] = useState(initialExpanded);

  const buttonContent = (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className={`
        w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300
        hover:bg-slate-100 dark:hover:bg-slate-800
        text-slate-600 dark:text-slate-300
        shrink-0
      `}
    >
      <Icon size={20} className="shrink-0" />
      {!isCollapsed && (
        <>
          <span className="flex-1 text-left whitespace-nowrap">{title}</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
          />
        </>
      )}
    </button>
  );

  return (
    <div className="mb-1">
      {isCollapsed ? (
        <Tooltip content={title} position="right">
          {buttonContent}
        </Tooltip>
      ) : (
        buttonContent
      )}
      <div
        className={`
          overflow-hidden transition-all duration-300
          ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          ${isCollapsed ? "pl-0" : "pl-3"}
        `}
      >
        <div className="space-y-1 pt-1">{children}</div>
      </div>
    </div>
  );
};
