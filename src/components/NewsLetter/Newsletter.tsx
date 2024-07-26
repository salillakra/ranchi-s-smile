import React from "react";

const newsletter = () => {
  return (
    <>
      <aside
        className="my-8 border border-gray-200 bg-tertiary p-4 shadow-md sm:p-6 lg:p-8"
        aria-label="Subscribe to the our newsletter"
      >
        <h3 className="mb-3 text-xl font-medium text-gray-900">
          Get more updates...
        </h3>
        <p className="mb-5 text-sm font-medium text-black">
          Subscribe to my newsletter and get my latest posts delivered right to
          your inbox!
        </p>
        <form>
          <div data-style="clean" className="mb-3 flex items-end">
            <ul
              className="formkit-alert formkit-alert-error"
              data-element="errors"
              data-group="alert"
            ></ul>
            <div
              data-element="fields"
              data-stacked="false"
              className="seva-fields formkit-fields mb-3 flex w-full max-w-md items-center"
            >
              <div className="formkit-field relative mr-3 w-full">
                <label
                  htmlFor="member_email"
                  className="mb-2 block hidden text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5">
                  <svg
                    className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
                </div>
                <input
                  id="member_email"
                  className="formkit-input focus:border-greeb-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:ring-green-500"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Your email address..."
                  required
                  type="email"
                />
              </div>
              <button>
                <span className="cursor-pointer rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-quaternary hover:bg-green-800 focus:ring-4 focus:ring-green-300">
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </form>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
          By subscribing, you agree with Ranchi&apos;s smile{" "}
          <a
            rel="nofollow"
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            rel="nofollow"
            className="text-blue-600 hover:underline dark:text-blue-500"
            href="#"
          >
            Privacy Policy
          </a>
          .
        </div>
      </aside>
    </>
  );
};

export default newsletter;
