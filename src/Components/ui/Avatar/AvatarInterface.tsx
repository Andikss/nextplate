/** @format */

export interface AvatarProps {
  url: string;
  username: string;
  openable?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}
