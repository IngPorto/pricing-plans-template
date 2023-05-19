import Link from "next/link";
import Image from "next/image";

export default function Signin() {
  return (
    <main>
      <div className="flex justify-center h-[100vh] bg-black">
        <div className="flex flex-col justify-between max-w-lg p-3 m-auto w-80 ">
          <div className="flex justify-center pb-12 ">
            <svg
              width="64px"
              height="64px"
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
          </div>
          <div className="flex flex-col space-y-4">
            <div className="t-dOnDMp">
              <div className="py-px">
                <div className="">
                  <button className="flex items-center justify-center gap-2 rounded pointer w-full border border-neutral-700 p-3 my-3 bg-neutral-800 text-neutral-200 text-sm hover:bg-neutral-700 transition-all">
                    <svg
                      className="c-eSSyNk"
                      fill="gray"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 30 30"
                      width="21px"
                      height="21px"
                    >
                      <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </svg>
                    Sign in with Github
                  </button>
                </div>
              </div>

              <div className="w-full h-px bg-neutral-800 my-3"></div>

              <form id="auth-sign-in" autoComplete="on" className="w-full py-3">
                <div className="">
                  <div className="">
                    <div className="flex flex-col gap-3 mb-3">
                      <label
                        htmlFor="email"
                        className="text-neutral-500 text-sm"
                      >
                        Email address
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        autoComplete="email"
                        className="border border-neutral-700 bg-neutral-900 text-neutral-600 placeholder:text-neutral-400 text-sm py-3 px-4 rounded text-neutral-100"
                      />
                    </div>
                    <div className="flex flex-col gap-3 mb-3">
                      <label
                        htmlFor="password"
                        className="text-neutral-500 text-sm"
                      >
                        Your Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Your password"
                        autoComplete="current-password"
                        className="border border-neutral-700 bg-neutral-900 text-neutral-600 placeholder:text-neutral-400 text-sm py-3 px-4 rounded text-neutral-100 tracking-[0.5em]"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="rounded pointer w-full border border-neutral-700 p-3 my-4 bg-neutral-700 text-neutral-200 text-sm hover:bg-neutral-700 transition-all"
                  >
                    Sign in
                  </button>
                  <div className="flex flex-col gap-2 text-center text-sm text-neutral-500 pt-5 underline">
                    <Link
                      href="#auth-magic-link"
                      className="hover:text-neutral-400"
                    >
                      Send a magic link email
                    </Link>
                    <Link
                      href="#auth-forgot-password"
                      className="hover:text-neutral-400"
                    >
                      Forgot your password?
                    </Link>
                    <Link
                      href="#auth-sign-up"
                      className="hover:text-neutral-400"
                    >
                      Don't have an account? Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
