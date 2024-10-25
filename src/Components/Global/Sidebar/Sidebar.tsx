/** @format */

"use client";

import React, { useState, useEffect } from "react";
import {
  Users,
  Settings,
  HelpCircle,
  BookOpen,
  Folder,
  Mail,
  Calendar,
  LogOut,
  LayoutDashboard,
  BarChart3,
  Building2,
  Wallet,
  CircleDollarSign,
  LineChart,
  Shield,
  Bell,
  MessageSquare,
  ChevronsRight,
  ChevronsLeft,
} from "lucide-react";
import {
  NavigationGroup,
  NavigationItem,
  NavigationSection,
  UserProfile,
} from "./Child";
import Image from "next/image";

export const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("dashboard");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsCollapsed(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`
      relative h-screen bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800
      transition-all duration-300 ease-in-out flex flex-col
      ${isCollapsed ? "w-20" : "w-64"}
      md:relative md:translate-x-0
      ${isCollapsed ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
    `}
    >
      {/* Sticky Header */}
      <div className="flex-shrink-0 bg-white dark:bg-slate-900">
        <div className="relative p-4 pl-[24px] flex items-center justify-start h-16 border-b border-slate-200 dark:border-slate-800">
          <Image src="/next.svg" alt="logo" className="shrink-0" width={32} height={32} />
          <span
            className={`
            ml-3 font-semibold text-xl
            ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
            transition-all duration-300
          `}
          >
            Dashboard
          </span>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`absolute p-1.5 text-white transition-all -right-[3rem] ${isCollapsed ? "sm:-right-[3rem]" : "sm:-right-[1.5rem]"} bg-blue-600 shadow-2xl dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full md:block z-50`}
          >
            {isCollapsed ? (
              <ChevronsRight size={24} />
            ) : (
              <ChevronsLeft size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Scrollable Navigation */}
      <nav className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-6">
        {/* Overview Section */}
        <NavigationSection title="Overview" isCollapsed={isCollapsed}>
          <NavigationItem
            icon={LayoutDashboard}
            label="Dashboard"
            isActive={activeItem === "dashboard"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("dashboard")}
          />
          <NavigationItem
            icon={BarChart3}
            label="Analytics"
            isActive={activeItem === "analytics"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("analytics")}
          />
        </NavigationSection>

        {/* Business Section */}
        <NavigationSection title="Business" isCollapsed={isCollapsed}>
          <NavigationGroup
            title="Organization"
            icon={Building2}
            isCollapsed={isCollapsed}
            initialExpanded={true}
          >
            <NavigationItem
              icon={Users}
              label="Team Members"
              isActive={activeItem === "team"}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem("team")}
            />
            <NavigationItem
              icon={Folder}
              label="Departments"
              isActive={activeItem === "departments"}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem("departments")}
            />
          </NavigationGroup>

          <NavigationGroup
            title="Finance"
            icon={Wallet}
            isCollapsed={isCollapsed}
          >
            <NavigationItem
              icon={CircleDollarSign}
              label="Revenue"
              isActive={activeItem === "revenue"}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem("revenue")}
            />
            <NavigationItem
              icon={LineChart}
              label="Reports"
              isActive={activeItem === "reports"}
              isCollapsed={isCollapsed}
              onClick={() => setActiveItem("reports")}
            />
          </NavigationGroup>
        </NavigationSection>

        {/* Apps Section */}
        <NavigationSection title="Applications" isCollapsed={isCollapsed}>
          <NavigationItem
            icon={Mail}
            label="Email"
            badge="14"
            isActive={activeItem === "email"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("email")}
          />
          <NavigationItem
            icon={Calendar}
            label="Calendar"
            isActive={activeItem === "calendar"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("calendar")}
          />
          <NavigationItem
            icon={MessageSquare}
            label="Messages"
            badge="3"
            isActive={activeItem === "messages"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("messages")}
          />
        </NavigationSection>

        {/* Settings Section */}
        <NavigationSection title="Settings" isCollapsed={isCollapsed}>
          <NavigationItem
            icon={Settings}
            label="General"
            isActive={activeItem === "settings"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("settings")}
          />
          <NavigationItem
            icon={Shield}
            label="Security"
            isActive={activeItem === "security"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("security")}
          />
          <NavigationItem
            icon={Bell}
            label="Notifications"
            isActive={activeItem === "notifications"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("notifications")}
          />
        </NavigationSection>

        {/* Support Section */}
        <NavigationSection title="Support" isCollapsed={isCollapsed}>
          <NavigationItem
            icon={HelpCircle}
            label="Help Center"
            isActive={activeItem === "help"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("help")}
          />
          <NavigationItem
            icon={BookOpen}
            label="Documentation"
            isActive={activeItem === "docs"}
            isCollapsed={isCollapsed}
            onClick={() => setActiveItem("docs")}
          />
        </NavigationSection>
      </nav>

      {/* Sticky Footer */}
      <div className="flex-shrink-0 border-t bg-white dark:bg-slate-900">
        {/* User Profile */}
        <UserProfile isCollapsed={isCollapsed} />

        {/* Logout Button */}
        <div className="p-4 pt-0 flex-shrink-0">
          <button className="w-full flex-shrink-0 flex items-center gap-4 p-3 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300">
            <LogOut size={20} className="shrink-0" />
            <span
              className={`
              ${isCollapsed ? "opacity-0 w-0" : "opacity-100 w-auto"}
              transition-all duration-300 whitespace-nowrap
            `}
            >
              Log Out
            </span>
          </button>
        </div>
      </div>
    </aside>
  );
};
