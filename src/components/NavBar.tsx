import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div className="sticky -top-5 z-10 hidden justify-center pt-5 md:flex">
      <nav className="flex w-[80%] items-center justify-between rounded-lg bg-[rgba(0,0,0,0.4)] px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-full">
            <Image
              height={40}
              width={40}
              className="scale-125"
              src="/tooth.svg"
              alt="brand logo"
            />
          </div>
          <a
            href="#"
            className="hover-underline-animation text-2xl text-primary"
          >
            Ranchi&apos;s Smile
          </a>
        </div>

        <div className="flex gap-8">
          <a
            href="#"
            className="hover-underline-animation text-xl text-quaternary transition-all"
          >
            Products
          </a>
          <a
            href="#"
            className="hover-underline-animation text-xl text-quaternary transition-all"
          >
            Tech
          </a>
          <a
            href="#"
            className="hover-underline-animation text-xl text-quaternary transition-all"
          >
            Resources
          </a>
          <a
            href="#"
            className="hover-underline-animation text-xl text-quaternary transition-all"
          >
            Contact us
          </a>
          <Link
            href="/appointment"
            className="hover-underline-animation text-xl text-quaternary transition-all"
          >
            Book now
          </Link>
          <a
            href="#"
            className="hover-underline-animation text-xl text-secondary transition-all"
          >
            Sign up{" "}
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
