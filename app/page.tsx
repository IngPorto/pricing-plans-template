import Link from "next/link";
import Image from "next/image";

export default function RootPage() {
  return (
    <main>
      <section className="bg-black pt-16 md:pt-20">
        <div className="max-w-6xl mx-auto py-8 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
              Pricing Plans
            </h1>
            <p className="mt-5 text-xl text-zinc-200 sm:text-center sm:text-2xl max-w-2xl m-auto">
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
            <div className="relative self-center mt-6 bg-zinc-900 rounded-lg p-0.5 flex sm:mt-8 border border-zinc-800">
              <button
                type="button"
                className="relative w-1/2 bg-zinc-700 border-zinc-800 shadow-sm text-white rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8"
              >
                Monthly billing
              </button>
              <button
                type="button"
                className="ml-0.5 relative w-1/2 border border-transparent text-zinc-400 rounded-md m-1 py-2 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 focus:z-10 sm:w-auto sm:px-8"
              >
                Yearly billing
              </button>
            </div>
          </div>
          <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Hobby
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-5xl font-extrabold text-white">$12</span>
                  <span className="text-base font-medium text-zinc-100">
                    /month
                  </span>
                </p>
                <button
                  data-variant="slim"
                  className="pointer rounded-sm	border-2 border-transparent bg-white text-black mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 border border-pink-500">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Freelancer
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-5xl font-extrabold text-white">$24</span>
                  <span className="text-base font-medium text-zinc-100">
                    /month
                  </span>
                </p>
                <button
                  data-variant="slim"
                  className="pointer rounded-sm	border-2 border-transparent bg-white text-black mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Startup
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-5xl font-extrabold text-white">$32</span>
                  <span className="text-base font-medium text-zinc-100">
                    /month
                  </span>
                </p>
                <button
                  data-variant="slim"
                  className="pointer rounded-sm	border-2 border-transparent bg-white text-black mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900">
              <div className="p-6">
                <h2 className="text-2xl leading-6 font-semibold text-white">
                  Enterprise
                </h2>
                <p className="mt-4 text-zinc-300">
                  All the basics for starting a new business
                </p>
                <p className="mt-8">
                  <span className="text-5xl font-extrabold text-white">$48</span>
                  <span className="text-base font-medium text-zinc-100">
                    /month
                  </span>
                </p>
                <button
                  data-variant="slim"
                  className="pointer rounded-sm	border-2 border-transparent bg-white text-black mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-zinc-900"
                  type="button"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div>
            <p className="mt-24 text-xs uppercase text-zinc-400 text-center font-bold tracking-[0.3em]">
              Brought to you by
            </p>
            <div className="flex flex-col items-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
              <div className="flex items-center justify-start">
                <Link href="https://nextjs.org" aria-label="Next.js Link">
                  <Image
                    src="https://www.iconsdb.com/icons/preview/white/nike-xxl.png"
                    alt="Next.js Logo"
                    className="h-20 w-20 text-white"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link href="https://vercel.com" aria-label="Vercel.com Link">
                  <Image
                    src="https://www.iconsdb.com/icons/preview/white/apple-xxl.png"
                    alt="Vercel.com Logo"
                    className="h-16 w-16 text-white"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link href="https://stripe.com" aria-label="stripe.com Link">
                  <Image
                    src="https://www.iconsdb.com/icons/preview/white/mercedes-benz-xxl.png"
                    alt="stripe.com Logo"
                    className="h-16 w-16 text-white"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link href="https://supabase.io" aria-label="supabase.io Link">
                  <Image
                    src="https://www.iconsdb.com/icons/preview/white/paypal-xxl.png"
                    alt="supabase.io Logo"
                    className="h-16 w-16 text-white"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
              <div className="flex items-center justify-start">
                <Link href="https://github.com" aria-label="github.com Link">
                  <Image
                    src="https://www.iconsdb.com/icons/preview/white/honda-xxl.png"
                    alt="github.com Logo"
                    className="h-16 w-16 text-white"
                    width={50}
                    height={50}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
