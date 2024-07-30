"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FourOhFour = () => {
  const router = useRouter();

  return (
    <>
      <section className="bg-primary">
        <div className="container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-red-500">404 error</p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500">
              Sorry, the page you are looking for doesn&apos;t exist.Here are
              some helpful links:
            </p>

            <div className="mt-6 flex items-center gap-x-3">
              <button
                onClick={() => router.back()}
                className="flex w-1/2 items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 sm:w-auto dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-5 w-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </button>

              <Link
                href="/"
                className="w-1/2 shrink-0 rounded-lg bg-blue-500 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                Take me home
              </Link>
            </div>
          </div>

          <div className="relative mt-8 w-full lg:mt-0 lg:w-1/2">
            <Image
              height={500}
              width={500}
              className="h-80 w-full rounded-lg object-cover md:h-96 lg:h-[32rem]"
              src="/Errors/404.avif"
              alt="404 image"
            />
          </div>
        </div>
      </section>
      <div className="absolute bottom-0 w-full border-t border-gray-300 py-4">
        <div className="container mx-auto flex flex-col items-center justify-center space-y-1 text-sm text-gray-600 md:flex-row md:space-x-8 md:space-y-0">
          <span className="font-bold">You can contact us:</span>
          <a
            href="tel:8294021595"
            className="flex items-center space-x-1"
            title="Call"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span>+91 8294021595</span>
          </a>
          <a
            href="mailto:salilakra.secure@proton.me"
            className="flex items-center space-x-1"
            target="_blank"
            title="Email"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>salillakra.secure@proton.me</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default FourOhFour;
