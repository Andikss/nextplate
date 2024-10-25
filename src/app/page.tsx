/** @format */

"use client";

import { Avatar, Menu, Sidebar } from "@/Components/Global";
import { User, Settings, LogOut } from "lucide-react";

export default function Home() {
  const handleProfileClick = () => {
    console.log("Profile clicked");
    // Add your logic here
  };

  const handleSettingsClick = () => {
    console.log("Settings clicked");
    // Add your logic here
  };

  const handleLogoutClick = () => {
    console.log("Logout clicked");
    // Add your logic here
  };

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 gradient-blue p-4">
        <div className="flex justify-end">
          <Menu
            items={[
              { id: "1", label: "Profile", icon: User, onClick: handleProfileClick },
              { id: "2", label: "Settings", icon: Settings, onClick: handleSettingsClick },
              { id: "3", label: "Logout", icon: LogOut, onClick: handleLogoutClick },
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
      </main>
    </div>
  );
}
