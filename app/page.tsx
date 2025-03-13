"use client"

import Image from "next/image";
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'About Us', href: '#about-us' },
  { name: 'Why Us', href: '#why-us' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Our Launch', href: '#our-launch' },
];

export default function Home() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
              <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt=""
                      src="logo.png"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                      {item.name}
                    </a>
                  ))}
                </div>
              
              </nav>
              <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="flex items-center justify-between">
                    <a href="#" className="-m-1.5 p-1.5">
                      <span className="sr-only">Your Company</span>
                      <img
                        alt=""
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        className="h-8 w-auto"
                      />
                    </a>
                    <button
                      type="button"
                      onClick={() => setMobileMenuOpen(false)}
                      className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon aria-hidden="true" className="size-6" />
                    </button>
                  </div>
                </DialogPanel>
              </Dialog>
            </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Connecting you to trusted service professionals.
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Instant Home Services, <br></br>Delivered in <span className="bg-[#1f75fe] leading-none px-1 py-0.5">10 Minutes!</span>
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Tired of long wait times, unreliable workers, and overpriced services?<br></br>
            ReachOut connects you with verified experts for cleaning, repairs, and maintenance — 
            quick, reliable, and hassle-free!
            </p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    
    <div id="about-us"   className="relative isolate px-6 pt-14 lg:px-8 bg-[#1f75fe] h-screen">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto py-32 sm:py-48 lg:py-56">
        <div className="text-center flex flex-col">
          <div className="flex items-center justify-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-5xl mr-3 mt-[22px]">
              What is 
            </h1>
            <img src="./white_logo.png" className="h-[70px] w-[170px]"></img>
          </div>
          <p className="mt-8 text-lg max-w-[5xl] font-medium text-pretty text-white sm:text-xl/8">
          ReachOut is a hyperlocal on-demand service platform that connects users with verified professionals for household tasks such as cleaning, appliance repair, maintenance, and more—all within just 10 minutes. Our goal is to provide affordable, convenient, and high-quality solutions, ensuring that users no longer struggle with unreliable service providers or long wait times.
          </p>
          {/* <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div> */}
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>

    <div id="why-us" className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-indigo-600">Why Us ?</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              Fast, Reliable Home Services – Anytime, Anywhere
              </h1>
              <p className="mt-6 text-xl/8 text-gray-700">
              Need a quick fix? ReachOut connects you with trusted professionals for cleaning, repairs, and home maintenance—all within minutes!
              </p>
            </div>
          </div>
        </div>
        <div className="-mt-12 -ml-25 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt=""
            src="./clean.svg"
            className="w-[48rem] max-w-none  sm:w-[57rem]"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">             
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                <img alt="" src="list.png" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Instant Access to Experts</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img alt="" src="range.png" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Wide Range of Services</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img alt="" src="fast.png" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Quick & Hassle-Free Booking</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <img alt="" src="tracking.png" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Real-Time Tracking</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img alt="" src="cust.png" className="mt-1 size-5 flex-none text-indigo-600" />
                <span>
                    <strong className="font-semibold text-gray-900">Customer Satisfaction Guarantee</strong> 
                  </span>
                </li>
                <li className="flex gap-x-3">
                <img alt="" src="price.png" className="mt-1 size-5 flex-none text-indigo-600" />
                  <span>
                    <strong className="font-semibold text-gray-900">Affordable & Transparent Pricing</strong> 
                  </span>
                </li>
              </ul>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No service too small or too big for ReachOut..</h2>
              <p className="mt-6">
              Whether it's a quick fix or routine maintenance, ReachOut connects you with trusted experts at a moment's notice.
              Enjoy seamless service with real-time updates, customer satisfaction guarantees, and transparent pricing—all in one platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
  <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
    <svg
      viewBox="0 0 1024 1024"
      aria-hidden="true"
      className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
    >
      <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
      <defs>
        <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
          <stop stopColor="#7775D6" />
          <stop offset={1} stopColor="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
      <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
        Struggling to Find Reliable Service Professionals?
      </h2>
      <p className="mt-6 text-lg/8 text-pretty text-gray-300">
        ReachOut provides instant access to verified professionals for cleaning, repairs, and home maintenance. We quickly connect you with the nearest available expert for fast and reliable service.
      </p>
    </div>
    <div className="absolute bottom-0 right-0 mb-4 mr-4 w-1/4">
      <img
        alt="App screenshot"
        src="./angry1.svg"
        className="h-full w-full object-contain !block"
      />
    </div>
  </div>
</div>


    <div id="how-it-works" className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-4xl font-semibold text-gray-400">What We Offer</h2>
        <p className="mx-auto mt-4 font-semibold max-w-[5xl] text-center  tracking-tight text-balance text-gray-950 text-[20px]">
        Finding reliable service professionals shouldn't be a hassle. ReachOut connects you with verified experts for cleaning, repairs, and home maintenance—all within minutes. Our platform ensures fast, convenient, and trustworthy services at your doorstep.
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Instant Service, Anytime
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Need help now? Get access to skilled professionals for urgent repairs, cleaning, and maintenance with just a tap.
                </p>
              </div>
              <div className="@container relative min-h-[30rem] w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                  <img
                    className="size-full object-cover object-top"
                    src="./instant_service.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 lg:rounded-l-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-1">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                  Smart Matching Technology
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Our intelligent system connects you with the nearest available professionals, reducing wait times and ensuring quick service.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <div className="max-w-xs w-full h-[200px] overflow-hidden">
                  <img
                    className="w-full h-full object-contain"
                    src="matching.svg"
                    alt="Smart Matching"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-t-[2rem]"></div>
          </div>
          <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="absolute inset-px rounded-lg bg-white"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">Seamless Booking & Support</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                Effortlessly schedule and manage services through our user-friendly platform, backed by dedicated customer support.
                </p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  className="h-[min(152px,40cqw)] object-cover"
                  src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png"
                  alt=""
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5"></div>
          </div>
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                Verified Experts You Can Trust
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                We carefully vet every service provider to ensure quality, reliability, and safety for your home.
                </p>
              </div>
              <div className="flex-grow flex items-end justify-center">
                <img src="experts.jpg" alt="" className="w-full object-contain" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg ring-1 shadow-sm ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="our-launch" className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 flex justify-baseline h-screen">
      <img
        alt=""
        src="./launch.svg"
        className="absolute bottom-0 right-0 -z-10 h-[500px] object-cover object-right md:object-center"
      />

      <div className="max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-semibold tracking-tight text-white  sm:text-7xl"><span className="bg-[#1f75fe]">Launching Soon!</span><br></br>
          <span className="text-[40px]">We'll be rolling out in major metro cities soon—stay tuned!</span></h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-300 sm:text-xl/8">
          We're working hard to bring ReachOut to life! Our team is developing a seamless platform that will connect homeowners with trusted professionals for quick and reliable home services.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
