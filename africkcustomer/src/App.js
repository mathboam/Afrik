import React from "react";

import "./App.css";

function App() {
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
                        href="https://localhost:3000"
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
          <div className="side-image lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="./shoe1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-24 mt-5">
          <h4 className="text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl">
            Afrik Bespoke
          </h4>
        </div>
        {/* about us */}
        <div id="intro" className=" bg-grayBackground">
          <div className="mx-auto max-w-screen-xl px-4 sm:mt-10 sm:px-6 md:mt-10 lg:mt-10 lg:px-8 xl:mt-28 flex flex-row p-12 justify-center items-center bg-grayBackground">
            <div className="h-auto items-center flex justify-center sm:flex sm:justify-left w-full">
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
                <div className="bg-black w-32 h-56 mx-4"></div>
                <p className="mt-3 text-sm text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Africk Bespoke is a local exclusive shoe producing company in
                  Ghana.We sell quality and official shoes for any occassions
                  and office wears.
                </p>
              </div>
            </div>
          </div>

          {/* what we do */}
          <div className="t-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 flex flex-row p-12 justify-center items-center">
            <div className="h-auto items-center flex justify-center w-full">
              <div className="card3 z-50 border relative bg-white float-right flex flex-row justify-center items-center p-10">
                <h2 className="text-xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl">
                  What we do
                </h2>
                <div className="bg-black w-32 h-56 mx-4"></div>
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
            </div>
          </div>
        </div>
        <div className="w-full h-auto flex justify-center items-center mt-10 ">
          <div className="middleCard flex-col z-50">
            <p
              className={
                "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              {" "}
              looking for
            </p>
            <h3
              className={
                "text-6xl tracking-tight z-50 leading-10 font-extrabold my-20 text-white sm:text-6xl sm:leading-none md:text-5xl text-center "
              }
            >
              Exclusive Shoes for your Occasions and or Events?
            </h3>

            <a
              href="#"
              className="btn-2 w-64 z-50 transition duration-700 ease-in-out flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-brown rounded-full hover:translate-x-12 hover:translate-y-12 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 hover:bg-gray-900"
            >
              TALK TO US NOW!
            </a>
          </div>
        </div>
        <footer className={"flex items-center flex-col"}>
          <div
            className={
              "xl:flex xl:flex-row sm:flex sm:flex-col  xl:justify-center sm:justify-center md:flex md:flex-col md:justify-center  lg:flex lg:flex-col lg:justify-center"
            }
          >
            <div className={"flex flex-col p-10 w-full"}>
              <a href="#" aria-label="Home">
                <img
                  className="h-48 w-auto sm:h-48"
                  src="./africklog.png"
                  alt="Logo"
                />
              </a>
              <p
                className={
                  "mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                Quality shoes for gents at an affordable price. Contact us on
                the following addresses and phones for any enquiries and
                clarification
              </p>
            </div>
            <div className={"flex flex-col p-10 w-full"}>
              <h3
                className={
                  "text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl"
                }
              >
                {" "}
                Contact
              </h3>
              <div className={"h-1 bg-brown w-12 mt-4"}></div>

              <p
                className={
                  "mt-2 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                support@africkbespoke.com
              </p>
              <p
                className={
                  "text-base text-gray-500 sm:mt-0 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                +233(0) 54 187 9515
              </p>
              <p
                className={
                  "text-base  text-gray-500 sm:mt-0 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                +233(0) 54 187 9515
              </p>
              <p
                className={
                  "mt-3 text-base  text-gray-500 sm:mt-0 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                24 boundary street American house (Accra-Ghana)
              </p>
            </div>
            <div className={"flex flex-col p-10 w-full"}>
              <h3
                className={
                  "text-xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl"
                }
              >
                Sign Up
              </h3>

              <div className={"h-1 bg-brown w-12 mt-4"}></div>

              <p
                className={
                  "mt-2 text-base  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                }
              >
                Keep me up to date with new product uploads and content updates
              </p>
            </div>
          </div>
          <div>
            <p
              className={
                "mt-2 text-base  text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              &#169; {new Date().getFullYear()} . All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default App;
