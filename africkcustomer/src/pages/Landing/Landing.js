import React from "react";
import Footer from "../../components/Footer";
import cardImage from "../../assets/images/afrik1.png";
export default function Landing() {
  return (
    <React.Fragment>
      <div className={""}>
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-screen-xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start ">
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#" aria-label="Home">
                        <img
                          className="h-24 w-auto sm:h-24"
                          src="./africklog.png"
                          alt="Logo"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                          id="main-menu"
                          aria-label="Main menu"
                          aria-haspopup="true"
                        >
                          <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4">
                    <a
                      href="#"
                      className="font-medium text-gray-500 hover:text-brown transition duration-150 ease-in-out"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="ml-8 font-medium text-gray-500 hover:text-brown transition duration-150 ease-in-out"
                    >
                      Our Products
                    </a>
                  </div>
                </nav>
              </div>

              {/*<div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">*/}
              {/*  <div className="rounded-lg shadow-md">*/}
              {/*    <div*/}
              {/*      className="rounded-lg bg-white shadow-xs overflow-hidden"*/}
              {/*      role="menu"*/}
              {/*      aria-orientation="vertical"*/}
              {/*      aria-labelledby="main-menu"*/}
              {/*    >*/}
              {/*      <div className="px-5 pt-4 flex items-center justify-between">*/}
              {/*        <div>*/}
              {/*          <img*/}
              {/*            className="h-8 w-auto"*/}
              {/*            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"*/}
              {/*            alt=""*/}
              {/*          />*/}
              {/*        </div>*/}
              {/*        <div className="-mr-2">*/}
              {/*          <button*/}
              {/*            type="button"*/}
              {/*            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"*/}
              {/*            aria-label="Close menu"*/}
              {/*          >*/}
              {/*            <svg*/}
              {/*              className="h-6 w-6"*/}
              {/*              stroke="currentColor"*/}
              {/*              fill="none"*/}
              {/*              viewBox="0 0 24 24"*/}
              {/*            >*/}
              {/*              <path*/}
              {/*                stroke-linecap="round"*/}
              {/*                stroke-linejoin="round"*/}
              {/*                stroke-width="2"*/}
              {/*                d="M6 18L18 6M6 6l12 12"*/}
              {/*              />*/}
              {/*            </svg>*/}
              {/*          </button>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="px-2 pt-2 pb-3">*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"*/}
              {/*          role="menuitem"*/}
              {/*        >*/}
              {/*          Home*/}
              {/*        </a>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"*/}
              {/*          role="menuitem"*/}
              {/*        >*/}
              {/*          Our Products*/}
              {/*        </a>*/}
              {/* <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Company
                  </a> */}
              {/*      </div>*/}
              {/*      <div>*/}
              {/*        <a*/}
              {/*          href="#"*/}
              {/*          className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"*/}
              {/*          role="menuitem"*/}
              {/*        >*/}
              {/*          Log in*/}
              {/*        </a>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}

              <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                    Quality shoes for your
                    <br className="xl:hidden" />
                    <span className="text-brown">everyday wear</span>
                  </h2>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Promoting ghanamade products through quality shoes at
                    affordable prices. We do deliveries anywhere in the country
                    and also allow for pckups at our shops.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-full">
                      <a
                        href="#"
                        className="btn-1 w-full transition duration-700 ease-in-out flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brown rounded-full hover:translate-x-12 hover:translate-y-12 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 hover:bg-gray-900"
                      >
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#intro"
                        className="w-full flex items-center justify-center px-8 py-3 border border-gray-900 border text-base leading-6 font-medium rounded-full text-gray-900 hover:text-white hover:bg-gray-900 focus:outline-none focus:border-gray-900 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                      >
                        Enquiries
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="side-image relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="./shoe1.jpg"
              alt=""
            />
          </div>
          <span className={`absolute text-black z-50`}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A atque
            autem beatae dolor doloremque eius esse exercitationem ipsa
            perspiciatis vero. Corporis culpa dicta facere laboriosam, nemo
            praesentium ullam. Eum, odio.
          </span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1a202c"
            fill-opacity="1"
            d="M0,0L80,37.3C160,75,320,149,480,160C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
        <div className="flex justify-center bg-gray-900 border-4 items-center w-full h-24">
          <h4 className="text-xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-4xl">
            Afrik Bespoke
          </h4>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`transform rotate-180 mb-4`}
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1a202c"
            fill-opacity="1"
            d="M0,0L80,37.3C160,75,320,149,480,160C640,171,800,117,960,106.7C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
        <div className="flex justify-center items-center w-full h-24">
          <h4 className="text-xl tracking-tight leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-4xl">
            Afrik Bespoke
          </h4>
        </div>
        {/* about us */}
        <div>
          <div className=" mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-row p-12 justify-center items-center">
            <div className="h-auto items-center flex justify-center sm:flex sm:justify-left w-full">
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
              <div className="card2 z-0">
                <img
                  src="./bigImage.jpg"
                  alt="card"
                  className="w-full object-cover relative sm:h-72 md:h-96 lg:w-full lg:h-full"
                />
              </div>
              <div className="card z-50 border relative bg-white float-right flex flex-row justify-center items-center p-10">
                <h2 className="text-xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl">
                  About US
                </h2>
                <div className="bg-black w-3 h-56 mx-4" />
                <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Afrik Bespoke is a local exclusive shoe producing company in
                  Ghana.We sell quality and official shoes for any occassions
                  and office wears.
                </p>
              </div>
            </div>
          </div>

          {/* what we do */}
          <div className=" mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-row p-12 justify-center items-center">
            <div className="h-auto items-center flex justify-center w-full">
              <div className="card3 z-50 border relative bg-white float-right flex flex-row justify-center items-center p-10">
                <h2 className="text-xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl">
                  What we do
                </h2>
                <div className="bg-black w-4 h-56 mx-4" />
                <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  We Provide durable and exclusive shoes that fits all your
                  occasions. We provide shoes like Monk, dotted,ring my bell and
                  so many more. We also take in customer designs to make
                  preffered types for our customers.
                </p>
              </div>

              <div className="card2 z-0">
                <img
                  src="./bigImage.jpg"
                  alt="card"
                  className="w-full object-cover relative sm:h-72 md:h-96 lg:w-full lg:h-full"
                />
              </div>
              <div className="hidden sm:block">
                <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
                <svg
                  className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                  width="404"
                  height="392"
                  fill="none"
                  viewBox="0 0 404 392"
                >
                  <defs>
                    <pattern
                      id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                      x="0"
                      y="0"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x="0"
                        y="0"
                        width="4"
                        height="4"
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width="404"
                    height="392"
                    fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/**/}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#1a202c"
            fill-opacity="1"
            d="M0,224L60,218.7C120,213,240,203,360,208C480,213,600,235,720,256C840,277,960,299,1080,272C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className={`flex bg-gray-900`}>
          <div className="flex justify-center items-center mt-10 sm:w-2/4">
            <div className="middleCard shadow-md px-6 py-12 h-96 justify-center relative flex-col flex z-50 space-y-4">
              <img
                src={cardImage}
                className={`top-0 w-auto h-32 absolute right-0`}
              />
              <span className={"text-xl font-light text-white"}>
                Looking For
              </span>
              <h3
                className={
                  "text-3xl text-white font-light tracking-tight sm:text-4xl"
                }
              >
                Exclusive Shoes for Work and Occasions?
              </h3>

              <span
                className={`text-xl text-white font-semibold tracking-tight sm:text-xl`}
              >
                Look No Further
              </span>

              <span
                className={`text-white absolute right-0 mr-6 bottom-0 hover:text-brown`}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
            </div>
            <div className="hidden sm:block">
              <div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full"></div>
              <svg
                className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
                width="404"
                height="392"
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width="404"
                  height="392"
                  fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
                />
              </svg>
            </div>
          </div>
        </div>

        {/*  testimonials */}
        {/*<div className="relative mt-20">*/}
        {/*  <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">*/}
        {/*    <div className="relative sm:py-16 lg:py-0">*/}
        {/*      <div*/}
        {/*        aria-hidden="true"*/}
        {/*        className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"*/}
        {/*      >*/}
        {/*        <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72"></div>*/}
        {/*        <svg*/}
        {/*          className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"*/}
        {/*          width="404"*/}
        {/*          height="392"*/}
        {/*          fill="none"*/}
        {/*          viewBox="0 0 404 392"*/}
        {/*        >*/}
        {/*          <defs>*/}
        {/*            <pattern*/}
        {/*              id="02f20b47-fd69-4224-a62a-4c9de5c763f7"*/}
        {/*              x="0"*/}
        {/*              y="0"*/}
        {/*              width="20"*/}
        {/*              height="20"*/}
        {/*              patternUnits="userSpaceOnUse"*/}
        {/*            >*/}
        {/*              <rect*/}
        {/*                x="0"*/}
        {/*                y="0"*/}
        {/*                width="4"*/}
        {/*                height="4"*/}
        {/*                className="text-gray-200"*/}
        {/*                fill="currentColor"*/}
        {/*              />*/}
        {/*            </pattern>*/}
        {/*          </defs>*/}
        {/*          <rect*/}
        {/*            width="404"*/}
        {/*            height="392"*/}
        {/*            fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"*/}
        {/*          />*/}
        {/*        </svg>*/}
        {/*      </div>*/}
        {/*      <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">*/}
        {/*        <div className="relative pt-64 pb-10 rounded-2xl rounded-sm shadow-xl overflow-hidden">*/}
        {/*          <img*/}
        {/*            className="absolute inset-0 h-full w-full object-cover"*/}
        {/*            src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100"*/}
        {/*            alt=""*/}
        {/*          />*/}
        {/*          <div className="absolute inset-0 bg-rose-500 mix-blend-multiply"></div>*/}
        {/*          <div className="absolute inset-0 bg-gradient-to-t from-rose-600 via-rose-600 opacity-90"></div>*/}
        {/*          <div className="relative px-8">*/}
        {/*            <div>*/}
        {/*              <img*/}
        {/*                className="h-12"*/}
        {/*                src="https://tailwindui.com/img/logos/workcation.svg?color=white"*/}
        {/*                alt="Workcation"*/}
        {/*              />*/}
        {/*            </div>*/}
        {/*            <blockquote className="mt-8">*/}
        {/*              <div className="relative text-lg font-medium text-white md:flex-grow">*/}
        {/*                <svg*/}
        {/*                  className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-rose-400"*/}
        {/*                  fill="currentColor"*/}
        {/*                  viewBox="0 0 32 32"*/}
        {/*                  aria-hidden="true"*/}
        {/*                >*/}
        {/*                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />*/}
        {/*                </svg>*/}
        {/*                <p className="relative">*/}
        {/*                  Tincidunt integer commodo, cursus etiam aliquam neque,*/}
        {/*                  et. Consectetur pretium in volutpat, diam. Montes,*/}
        {/*                  magna cursus nulla feugiat dignissim id lobortis amet.*/}
        {/*                </p>*/}
        {/*              </div>*/}

        {/*              <footer className="mt-4">*/}
        {/*                <p className="text-base font-semibold text-rose-200">*/}
        {/*                  Sarah Williams, CEO at Workcation*/}
        {/*                </p>*/}
        {/*              </footer>*/}
        {/*            </blockquote>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}

        {/*    <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">*/}
        {/*      <div className="pt-12 sm:pt-16 lg:pt-20">*/}
        {/*        <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">*/}
        {/*          On a mission to empower teams*/}
        {/*        </h2>*/}
        {/*        <div className="mt-6 text-gray-500 space-y-6">*/}
        {/*          <p className="text-lg">*/}
        {/*            Sagittis scelerisque nulla cursus in enim consectetur quam.*/}
        {/*            Dictum urna sed consectetur neque tristique pellentesque.*/}
        {/*            Blandit amet, sed aenean erat arcu morbi. Cursus faucibus*/}
        {/*            nunc nisl netus morbi vel porttitor vitae ut. Amet vitae*/}
        {/*            fames senectus vitae.*/}
        {/*          </p>*/}
        {/*          <p className="text-base leading-7">*/}
        {/*            Sollicitudin tristique eros erat odio sed vitae, consequat*/}
        {/*            turpis elementum. Lorem nibh vel, eget pretium arcu vitae.*/}
        {/*            Eros eu viverra donec ut volutpat donec laoreet quam urna.*/}
        {/*            Sollicitudin tristique eros erat odio sed vitae, consequat*/}
        {/*            turpis elementum. Lorem nibh vel, eget pretium arcu vitae.*/}
        {/*            Eros eu viverra donec ut volutpat donec laoreet quam urna.*/}
        {/*          </p>*/}
        {/*          <p className="text-base leading-7">*/}
        {/*            Rhoncus nisl, libero egestas diam fermentum dui. At quis*/}
        {/*            tincidunt vel ultricies. Vulputate aliquet velit faucibus*/}
        {/*            semper. Pellentesque in venenatis vestibulum consectetur*/}
        {/*            nibh id. In id ut tempus egestas. Enim sit aliquam nec, a.*/}
        {/*            Morbi enim fermentum lacus in. Viverra.*/}
        {/*          </p>*/}
        {/*        </div>*/}
        {/*      </div>*/}

        {/*      <div className="mt-10">*/}
        {/*        <dl className="grid grid-cols-2 gap-x-4 gap-y-8">*/}
        {/*          <div className="border-t-2 border-gray-100 pt-6">*/}
        {/*            <dt className="text-base font-medium text-gray-500">*/}
        {/*              Founded*/}
        {/*            </dt>*/}
        {/*            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">*/}
        {/*              2021*/}
        {/*            </dd>*/}
        {/*          </div>*/}

        {/*          <div className="border-t-2 border-gray-100 pt-6">*/}
        {/*            <dt className="text-base font-medium text-gray-500">*/}
        {/*              Employees*/}
        {/*            </dt>*/}
        {/*            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">*/}
        {/*              5*/}
        {/*            </dd>*/}
        {/*          </div>*/}

        {/*          <div className="border-t-2 border-gray-100 pt-6">*/}
        {/*            <dt className="text-base font-medium text-gray-500">*/}
        {/*              Beta Users*/}
        {/*            </dt>*/}
        {/*            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">*/}
        {/*              521*/}
        {/*            </dd>*/}
        {/*          </div>*/}

        {/*          <div className="border-t-2 border-gray-100 pt-6">*/}
        {/*            <dt className="text-base font-medium text-gray-500">*/}
        {/*              Raised*/}
        {/*            </dt>*/}
        {/*            <dd className="text-3xl font-extrabold tracking-tight text-gray-900">*/}
        {/*              $25M*/}
        {/*            </dd>*/}
        {/*          </div>*/}
        {/*        </dl>*/}
        {/*        <div className="mt-10">*/}
        {/*          <a href="#" className="text-base font-medium text-rose-500">*/}
        {/*            Learn more about how we're changing the world&nbsp&rarr;*/}
        {/*          </a>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}

        <Footer />
      </div>
    </React.Fragment>
  );
}
