import { signIn } from "@/src/auth";
import Image from "next/image";
import Link from "next/link";

// Social Media Icons
const MicrosoftIcon = () => (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Microsoft"
    role="img"
    viewBox="0 0 512 512"
  >
    <rect width="512" height="512" rx="15%" fill="#ffffff" />
    <path d="M75 75v171h171v-171z" fill="#f25022" />
    <path d="M266 75v171h171v-171z" fill="#7fba00" />
    <path d="M75 266v171h171v-171z" fill="#00a4ef" />
    <path d="M266 266v171h171v-171z" fill="#ffb900" />
  </svg>
);

const GoogleIcon = () => (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
    />
    <path
      fill="#FF3D00"
      d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
    />
  </svg>
);

const AppleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    viewBox="0 0 368 432"
  >
    <path
      fill="currentColor"
      d="M353 146q-21 7-35 32.5T304 229q0 31 16 57.5t43 33.5q-8 27-26.5 55.5T299 418q-16 11-40 11q-16 0-37-8q-18-9-31-9q-10 0-40 12q-18 5-26 5q-24 0-49-20q-36-34-56-81T0 230q0-53 30.5-93.5T108 96q26 0 48 11q17 11 34 11q16 0 31-6q39-16 52-16q35 0 61 23q12 12 19 27zM179 99q0-32 25-63q25-27 61-33q0 38-24 67q-27 29-62 29z"
    ></path>
  </svg>
);

// Login Component
const LoginComponent = () => {
  return (
    <div className="space-y-4">
      {/* google */}
      <form
        action={async () => {
          "use server";
          await signIn("google", {
            redirect: true,
            redirectTo: "/dashboard/user",
          });
        }}
      >
        <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-2 text-black transition-all hover:bg-slate-200">
          <GoogleIcon />
          <span className="text-xl">Sign in with Google</span>
        </button>
      </form>

      {/* apple */}
      <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-quaternary px-4 py-2 text-white transition-all hover:bg-slate-600">
        <AppleIcon />
        <span className="text-xl">Sign in with Apple</span>
      </button>

      {/* facebook */}
      <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600">
        <MicrosoftIcon />
        <span className="text-xl">Sign in with Microsoft</span>
      </button>
    </div>
  );
};

// Login Page
const LoginPage = () => {
  return (
    <div className="h-screen cursor-default bg-gray-700 bg-[url('/login/pine-watt-2Hzmz15wGik-unsplash.jpg')] bg-cover">
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Link href="/" className="absolute left-2 top-2 md:left-5 md:top-3">
          <Image
            src="/ranchi's smile logo.png"
            className="w-60"
            alt="Ranchi's Smile logo"
            height={1000}
            width={1000}
          />
        </Link>
        <div className="mx-2 rounded-lg bg-white bg-opacity-20 p-8 backdrop-blur-md lg:p-10">
          <div className="flex flex-col justify-start">
            <h1 className="poppins-regular text-3xl text-black">
              Sign in to continue
            </h1>
            <span className="text-white md:text-slate-900">
              {" "}
              Ranchi&rsquo;s smile
            </span>
          </div>
          <div className="my-8 grid place-items-center">
            <LoginComponent />
          </div>
          <span className="text-sm text-white">
            By clicking on the sign in button, you agree to our{" "}
            <a href="/login" className="text-blue-300">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="/login" className="text-blue-300">
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
