"use client";

import { usePathname } from "next/navigation";
import Layout from "./Layout";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = pathname === "/signin";

  if (isAuthPage) {
    return <>{children}</>; // No layout for sign-in
  }

  return <Layout>{children}</Layout>;
}
