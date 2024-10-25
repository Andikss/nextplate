/** @format */

import { Avatar, Menu } from "@/Components/ui";
import { LogOut, Settings, User } from "lucide-react";
import React from "react";

export const UserMenu = () => {
  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
  };

  return (
    <div className="flex items-center gap-3">
      <div className="text-right">
        <p className="text-sm font-medium leading-tight dark:text-slate-200">
          John Doe
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          john@example.com
        </p>
      </div>
      <Menu
        position="end"
        items={[
          {
            id: "1",
            label: "Profile",
            icon: User,
            onClick: handleProfileClick,
          },
          {
            id: "2",
            label: "Settings",
            icon: Settings,
            onClick: handleSettingsClick,
          },
          {
            id: "3",
            label: "Logout",
            icon: LogOut,
            onClick: handleLogoutClick,
          },
        ]}
      >
        <Avatar
          openable={false}
          url="/assets/static/img/default-avatar.png"
          username="John Doe"
          size="md"
        />
      </Menu>
    </div>
  );
};
