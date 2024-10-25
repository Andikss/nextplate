/** @format */

import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

export interface MenuItemProps {
  id: string;
  label: string;
  category?: string;
  icon?: LucideIcon;
  onClick?: () => void;
}

export interface MenuProps {
  items: MenuItemProps[];
  children: ReactNode;
}
