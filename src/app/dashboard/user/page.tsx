"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(null);

  const handleSignOut = async () => {};

  return (
    <div>
      <h1>Welcome to the onboard user page!</h1>
      <p>Start your onboarding process here.</p>
      <div className="mx-auto flex max-w-sm flex-col items-center rounded-lg bg-gray-100 p-8 shadow-lg">
        <Image
          height={128}
          width={128}
          src={userPhoto || ""}
          alt="Profile"
          className="mb-4 h-32 w-32 rounded-full border-2 border-gray-300"
        />
        <h2 className="mb-2 text-xl font-semibold text-blue-800">{userName}</h2>
        <p className="mb-4 text-gray-700">{userEmail}</p>
        <button
          onClick={handleSignOut}
          className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Page;
