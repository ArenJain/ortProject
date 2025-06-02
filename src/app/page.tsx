"use client";

import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Layout from "@/components/Layout";
import ScanForm from "@/components/ScanForm";
import ScanForm2 from "@/components/ScanForm2";

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
        {/* <ScanForm
          sessionName={session.user?.name || "User"}
          onSignOut={() => signOut({ callbackUrl: "/" })}
        /> */}
        <ScanForm2/>
      </div>
    
  );
}
