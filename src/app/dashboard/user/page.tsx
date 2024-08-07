import Image from "next/image";
import React, { useState } from "react";
import { signOut } from "@/src/auth";

const Page = () => {
  // const [userName, setUserName] = useState<string | null>(null);
  // const [userEmail, setUserEmail] = useState<string | null>(null);
  // const [userPhoto, setUserPhoto] = useState<string | null>(null);

  // const session = await getServerSession();

  return (
    <div>
      <h1>Welcome to the onboard user page!</h1>
      <p>Start your onboarding process here.</p>
      <div className="mx-auto flex max-w-sm flex-col items-center rounded-lg bg-gray-100 p-8 shadow-lg">
        <Image
          height={128}
          width={128}
          src={""}
          alt="Profile"
          className="mb-4 h-32 w-32 rounded-full border-2 border-gray-300"
        />
        <h2 className="mb-2 text-xl font-semibold text-blue-800">{}</h2>
        <p className="mb-4 text-gray-700">{}</p>
        <form
          action={async () => {
            "use server";
            await signOut({
              redirect: true,
              redirectTo: "/",
            });
          }}
        >
          <button className="rounded-lg bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600">
            Sign Out
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
