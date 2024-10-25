/** @format */

"use client";

import { UserMenu, Sidebar } from "@/Components/Global";

export default function Home() {
  return (
    <div className="flex h-[200vh]">
      <Sidebar />
      <main className="flex-1 gradient-blue p-4">
        <div className="flex justify-end items-center gap-4">
          <UserMenu/>
        </div>
      </main>
    </div>
  );
}
