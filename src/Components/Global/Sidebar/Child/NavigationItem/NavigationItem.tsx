/** @format */

import { NavigationItemProps } from "@/Components/Global";

export const NavigationItem: React.FC<NavigationItemProps> = ({
  icon: Icon,
  label,
  isActive,
  isCollapsed,
  onClick,
  badge,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
          w-full flex items-center gap-4 p-3 rounded-lg transition-all duration-300
          hover:bg-slate-100 dark:hover:bg-slate-800 shrink-0
          ${
            isActive
              ? "bg-slate-100 dark:bg-slate-800 text-blue-600"
              : "text-slate-600 dark:text-slate-300"
          }
        `}
    >
      <Icon size={20} className="shrink-0" />
      <span
        className={`
          ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"} 
          transition-all duration-300 whitespace-nowrap flex-1 text-left
        `}
      >
        {label}
      </span>
      {badge && !isCollapsed && (
        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
          {badge}
        </span>
      )}
    </button>
  );
};
