import React from "react";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black fixed w-full top-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex justify-between align-center flex-row py-4 md:py-6 relative">
          <div className="flex flex-1 items-center">
            <Link className="Navbar_logo__gEyoC" aria-label="Logo" href="/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <rect width="100%" height="100%" rx="16" fill="white"></rect>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
                  fill="black"
                ></path>
              </svg>
            </Link>
            <nav className="space-x-2 ml-6 hidden lg:block">
              <Link className="inline-flex cursor-pointer rounded-md p-1 font-semibold text-slate-200 hover:text-slate-100 focus:ring focus:ring-pink-300 focus:ring-offset-transparent" href="/">
                Pricing
              </Link>
              <Link className="inline-flex cursor-pointer rounded-md p-1 font-semibold text-slate-200 hover:text-slate-100 focus:ring focus:ring-pink-300 focus:ring-offset-transparent" href="/account">
                Account
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 justify-end space-x-8">
            <Link className="inline-flex cursor-pointer rounded-md p-1 font-semibold text-slate-200 hover:text-slate-100 focus:ring focus:ring-pink-300 focus:ring-offset-transparent" href="/signin">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
