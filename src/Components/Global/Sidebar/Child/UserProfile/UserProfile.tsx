/** @format */

import { User } from "lucide-react";

export const UserProfile: React.FC<{ isCollapsed: boolean }> = ({
  isCollapsed,
}) => (
  <div className="p-4 pl-[22px] shrink-0 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
    <div className="ml- w-8 h-8 shrink-0 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
      <User size={20} className="text-slate-600 dark:text-slate-300" />
    </div>
    <div
      className={`
        ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
        transition-all duration-300 flex-1 min-w-0
      `}
    >
      <p className="text-sm font-medium truncate dark:text-slate-200">
        John Doe
      </p>
      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
        john@example.com
      </p>
    </div>
  </div>
);
