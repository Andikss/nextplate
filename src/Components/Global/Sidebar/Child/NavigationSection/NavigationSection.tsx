/** @format */

import { NavigationSectionProps } from "@/Components/Global";

export const NavigationSection: React.FC<NavigationSectionProps> = ({
  title,
  children,
  isCollapsed,
}) => {
  return (
    <div className="mb-6">
      {!isCollapsed && (
        <h3 className="px-3 mb-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  );
};
