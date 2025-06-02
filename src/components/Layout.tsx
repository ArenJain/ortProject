// components/Layout.tsx
"use client";

import { BarChart2, FolderOpen, FolderSearch, Home, LayoutDashboard, User } from "lucide-react";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const username = session?.user?.name || "Anonymous";

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col justify-between p-4 min-h-screen">
      <div>
        <h2 className="text-2xl font-bold mb-6">🔍 ORT Scanner</h2>
        <nav className="flex flex-col space-y-4">
          <Link href="/" className="flex items-center gap-3 hover:text-gray-300">
            <Home size={18} /> Home
          </Link>
          <Link href="/dashboard" className="flex items-center gap-3 hover:text-gray-300">
            <LayoutDashboard size={18} /> Dashboard
          </Link>
          <Link href="/scanHistory" className="flex items-center gap-3 hover:text-gray-300">
            <FolderSearch size={18} /> Scan History
          </Link>
          <Link href="/projects" className="flex items-center gap-3 hover:text-gray-300">
            <FolderOpen size={18} /> Projects
          </Link>
          <Link href="/reports" className="flex items-center gap-3 text-gray-500 cursor-not-allowed opacity-60" >
            <BarChart2 size={18} /> Reports
          </Link>
        </nav>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="flex items-center gap-3">
          <User size={20} className="text-gray-400" />
          <div>
            <p className="text-sm font-semibold">Logged in as</p>
            <p className="text-sm text-gray-400 truncate">{username}</p>
          </div>
        </div>
      </div>
    </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Welcome {session?.user?.name}</h1>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-red-600 hover:underline text-sm"
          >
            Sign Out
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">{children}</main>
      </div>
    </div>
  );
}
