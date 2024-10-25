/** @format */

"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
  setExpanded: (value: boolean) => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setisCollapsed] = useState(true);

  const toggleSidebar = () => {
    setisCollapsed((prev) => !prev);
  };

  const setExpanded = (value: boolean) => {
    setisCollapsed(value);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar, setExpanded }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
