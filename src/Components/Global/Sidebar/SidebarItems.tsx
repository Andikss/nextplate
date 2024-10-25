/** @format */

import {
  LayoutDashboard,
  BarChart3,
  Building2,
  Users,
  Folder,
  Wallet,
  CircleDollarSign,
  LineChart,
  Mail,
  Calendar,
  MessageSquare,
  Settings,
  Shield,
  Bell,
  HelpCircle,
  BookOpen,
} from "lucide-react";

export const SidebarItems = {
  Overview: [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
  ],
  Business: [
    {
      label: "Organization",
      icon: Building2,
      initialExpanded: true,
      subItems: [
        { id: "team", label: "Team Members", icon: Users },
        { id: "departments", label: "Departments", icon: Folder },
      ],
    },
    {
      label: "Finance",
      icon: Wallet,
      subItems: [
        { id: "revenue", label: "Revenue", icon: CircleDollarSign },
        { id: "reports", label: "Reports", icon: LineChart },
      ],
    },
  ],
  Applications: [
    { id: "email", label: "Email", icon: Mail, badge: "14" },
    { id: "calendar", label: "Calendar", icon: Calendar },
    { id: "messages", label: "Messages", icon: MessageSquare, badge: "3" },
  ],
  Settings: [
    { id: "settings", label: "General", icon: Settings },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
  ],
  Support: [
    { id: "help", label: "Help Center", icon: HelpCircle },
    { id: "docs", label: "Documentation", icon: BookOpen },
  ],
};
