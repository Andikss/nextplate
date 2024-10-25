/** @format */

"use client";

import { UserMenu, Sidebar } from "@/Components/Global";
import { useSidebar } from "@/Contexts/Global";

interface ContainerProps {
  children?: React.ReactNode;
  title?: string;
}

export const Container = ({ children , title}: ContainerProps) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className="flex h-[200vh]">
      <Sidebar />
      <main
        className={`flex-1 gradient-blue p-4 transition-[margin] duration-300 ease-in-out ${
          !isCollapsed ? "ml-0 md:ml-64" : "ml-0 md:ml-20"
        }`}
      >
        <div className="flex justify-end items-center gap-4 mb-8">
          <UserMenu />
        </div>

        <h1 className="text-2xl font-bold mb-0">{title}</h1>

        {children ? children : <></>}
      </main>
    </div>
  );
};
