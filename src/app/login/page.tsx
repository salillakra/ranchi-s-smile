"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Facebook = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
  >
    <path
      fill="#1877F2"
      d="M256 128C256 57.308 198.692 0 128 0C57.308 0 0 57.307 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.347-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.958 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
    ></path>
    <path
      fill="#FFF"
      d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A128.959 128.959 0 0 0 128 256a128.9 128.9 0 0 0 20-1.555V165h29.825"
    ></path>
  </svg>
);
const Google = () => (
  <svg
    className="h-8 w-8"
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
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
const Apple = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8"
    width="1em"
    height="1em"
    viewBox="0 0 368 432"
  >
    <path
      fill="currentColor"
      d="M353 146q-21 7-35 32.5T304 229q0 31 16 57.5t43 33.5q-8 27-26.5 55.5T299 418q-16 11-40 11q-16 0-37-8q-18-9-31-9q-10 0-40 12q-18 5-26 5q-24 0-49-20q-36-34-56-81T0 230q0-53 30.5-93.5T108 96q26 0 48 11q17 11 34 11q16 0 31-6q39-16 52-16q35 0 61 23q12 12 19 27zM179 99q0-32 25-63q25-27 61-33q0 38-24 67q-27 29-62 29z"
    ></path>
  </svg>
);

const LoginComponent = () => {
  const router = useRouter();

  const SignInWithGoogle = async () => {
    try {
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="space-y-4">
        <button
          onClick={SignInWithGoogle}
          className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-white px-4 py-2 text-black transition-all hover:bg-slate-200"
        >
          <span>
            <Google />
          </span>
          <span className="text-xl">Sign in with Google</span>
        </button>
        <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-quaternary px-4 py-2 text-white transition-all hover:bg-slate-600">
          <span>
            <Apple />
          </span>
          <span className="text-xl">Sign in with Apple</span>
        </button>
        <button className="flex w-full cursor-pointer items-center gap-3 rounded-lg bg-blue-500 px-4 py-2 text-white transition-all hover:bg-blue-600">
          <span>
            <Facebook />
          </span>
          <span className="text-xl">Sign in with Facebook</span>
        </button>
      </div>
    </>
  );
};

const Loginpage = () => {
  return (
    <div className='h-screen w-full bg-black/30 bg-[url("/login/pine-watt-2Hzmz15wGik-unsplash.jpg")] bg-cover backdrop-blur-md'>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Link href="/">
          <Image
            src="/ranchi's smile logo.png"
            className="w-60"
            alt="Ranchi's Smile logo"
            height={1000}
            width={1000}
          />
        </Link>
        <div className="rounded-lg bg-slate-300 bg-opacity-40 p-8 lg:p-10">
          <div className="flex justify-center">
            <h1 className="poppins-medium mb-4 text-3xl">Welcome Back</h1>
          </div>
          <div className="mt-8">
            <LoginComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
