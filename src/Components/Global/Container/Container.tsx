/** @format */

"use client";

import { UserMenu, Sidebar } from "@/Components/Global";
import { useSidebar } from "@/Contexts/Global";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-[200vh]">
      <Sidebar />
      <main
        className={`flex-1 gradient-blue p-4 transition-[margin] duration-300 ease-in-out ${
          !isCollapsed ? "ml-64" : "ml-20"
        }`}
      >
        <div className="flex justify-end items-center gap-4 mb-8">
          <UserMenu />
        </div>
        {children}
      </main>
    </div>
  );
};
