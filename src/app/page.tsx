"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import ScanForm from "@/components/ScanForm";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading session...</p>;
  if (!session) {
    router.push("/signin");
    return null;
  }

  return (
    
      <div className="h-full bg-gray-50  px-4">
        <ScanForm
          sessionName={session.user?.name || "User"}
          onSignOut={() => signOut({ callbackUrl: "/" })}
        />
      </div>
    
  );
}
