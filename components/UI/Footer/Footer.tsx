import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-zinc-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-white transition-colors duration-150 bg-zinc-900">
        <div className="col-span-1 lg:col-span-2">
          <a
            className="flex flex-initial items-center font-bold md:mr-24"
            href="/"
          >
            <span className="rounded-full border border-zinc-700 mr-2">
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
            </span>
            <span>ACME</span>
          </a>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                About
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                Careers
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-white font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                LEGAL
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                Privacy Policy
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a
                className="text-white hover:text-zinc-200 transition ease-in-out duration-150"
                href="/"
              >
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 0C5.37 0 0 5.50583 0 12.3035C0 17.7478 3.435 22.3463 8.205 23.9765C8.805 24.0842 9.03 23.715 9.03 23.3921C9.03 23.0999 9.015 22.131 9.015 21.1005C6 21.6696 5.22 20.347 4.98 19.6549C4.845 19.3012 4.26 18.2092 3.75 17.917C3.33 17.6863 2.73 17.1173 3.735 17.1019C4.68 17.0865 5.355 17.9939 5.58 18.363C6.66 20.2239 8.385 19.701 9.075 19.3781C9.18 18.5783 9.495 18.04 9.84 17.7325C7.17 17.4249 4.38 16.3637 4.38 11.6576C4.38 10.3196 4.845 9.21227 5.61 8.35102C5.49 8.04343 5.07 6.78232 5.73 5.09058C5.73 5.09058 6.735 4.76762 9.03 6.3517C9.99 6.07487 11.01 5.93645 12.03 5.93645C13.05 5.93645 14.07 6.07487 15.03 6.3517C17.325 4.75224 18.33 5.09058 18.33 5.09058C18.99 6.78232 18.57 8.04343 18.45 8.35102C19.215 9.21227 19.68 10.3042 19.68 11.6576C19.68 16.3791 16.875 17.4249 14.205 17.7325C14.64 18.1169 15.015 18.8552 15.015 20.0086C15.015 21.6542 15 22.9768 15 23.3921C15 23.715 15.225 24.0995 15.825 23.9765C18.2072 23.1519 20.2773 21.5822 21.7438 19.4882C23.2103 17.3942 23.9994 14.8814 24 12.3035C24 5.50583 18.63 0 12 0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-zinc-900">
        <div>
          <span className="text-white">© 2023 ACME, Inc. All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-white">Crafted by</span>
          <Link href="https://vercel.com" aria-label="Vercel.com Link">
            <span className="inline-block h-6 ml-4 text-white tracking-wider font-extrabold">OLIGAN LINCOM</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
