/** @format */

import { LucideProps } from "lucide-react";

export type IconComponent = React.ComponentType<LucideProps>;

export interface NavigationItemProps {
  icon: IconComponent;
  label: string;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
  badge?: string | number;
}

export interface NavigationSectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
}

export interface NavigationGroupProps {
  title: string;
  icon: IconComponent;
  children: React.ReactNode;
  isCollapsed: boolean;
  initialExpanded?: boolean;
}