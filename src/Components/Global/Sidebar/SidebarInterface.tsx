/** @format */

import { LucideProps } from "lucide-react";

export type IconComponent = React.ComponentType<LucideProps>;

export interface NavigationItemProps {
  icon: IconComponent;
  label: string;
  onClick: () => void;
  badge?: string | number;
  path?: string;
}

export interface NavigationSectionProps {
  title: string;
  children: React.ReactNode;
}

export interface NavigationGroupProps {
  title: string;
  icon: IconComponent;
  children: React.ReactNode;
  initialExpanded?: boolean;
}