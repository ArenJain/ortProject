"use client";

import { signIn } from "next-auth/react";
import { Github } from "lucide-react";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md max-w-sm w-full space-y-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Welcome</h1>
        <p className="text-gray-600 text-sm">Sign in to continue</p>
        <button
          onClick={() => signIn("github", { callbackUrl: "/" })}
          className="w-full bg-black hover:bg-gray-900 text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2"
        >
          <Github className="w-5 h-5" />
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
}
