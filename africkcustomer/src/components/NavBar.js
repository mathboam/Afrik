import React, { useState } from "react";
import { Home, ShoppingCart } from "react-feather";

export default function NavBar() {
  let [toggleMenu, setToggleMenu] = useState(false);
  return (
    <React.Fragment>
      <nav className="">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>

                <svg
                  className="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="">
                <img
                  className="block lg:hidden h-24 w-auto"
                  src="./africklog.png"
                  alt="Workflow logo"
                />
                <img
                  className="hidden lg:block h-24 w-auto"
                  src="./africklog.png"
                  alt="Workflow logo"
                />
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex">
                <div className={"flex flex-row justify-center items-center"}>
                  <Home color={"black"} />
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium leading-5 text-black focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Home
                  </a>
                </div>
                <div className={"flex flex-row justify-center items-center"}>
                  <ShoppingCart />
                  <a
                    href="#"
                    className="text-black px-3 py-2 rounded-md text-sm font-medium leading-5 text-black hover:text-black hover:bg-gray-700 focus:outline-none focus:text-black focus:bg-gray-700 transition duration-150 ease-in-out"
                  >
                    Shop
                  </a>
                </div>
              </div>
            </div>

            {/*<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">*/}
            {/*  <button*/}
            {/*    className="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"*/}
            {/*    aria-label="Notifications"*/}
            {/*  >*/}
            {/*    <svg*/}
            {/*      className="h-6 w-6"*/}
            {/*      xmlns="http://www.w3.org/2000/svg"*/}
            {/*      fill="none"*/}
            {/*      viewBox="0 0 24 24"*/}
            {/*      stroke="currentColor"*/}
            {/*    >*/}
            {/*      <path*/}
            {/*        stroke-linecap="round"*/}
            {/*        stroke-linejoin="round"*/}
            {/*        stroke-width="2"*/}
            {/*        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"*/}
            {/*      />*/}
            {/*    </svg>*/}
            {/*  </button>*/}

            {/*<div className="ml-3 relative">*/}
            {/*  <div>*/}
            {/*    <button*/}
            {/*      onClick={() => {*/}
            {/*        setToggleMenu(!toggleMenu);*/}
            {/*      }}*/}
            {/*      className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out"*/}
            {/*      id="user-menu"*/}
            {/*      aria-label="User menu"*/}
            {/*      aria-haspopup="false"*/}
            {/*      aria-expanded={toggleMenu}*/}
            {/*    >*/}
            {/*      <img*/}
            {/*        className="h-8 w-8 rounded-full"*/}
            {/*        src="./africklog.png"*/}
            {/*        alt=""*/}
            {/*      />*/}
            {/*    </button>*/}
            {/*  </div>*/}

            {/*  <div*/}
            {/*    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg z-50"*/}
            {/*    style={{ display: toggleMenu ? "block" : "none" }}*/}
            {/*  >*/}
            {/*    <div*/}
            {/*      className="py-1 rounded-md bg-white shadow-xs"*/}
            {/*      role="menu"*/}
            {/*      aria-orientation="vertical"*/}
            {/*      aria-labelledby="user-menu"*/}
            {/*    >*/}
            {/*      <a*/}
            {/*        href="#"*/}
            {/*        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"*/}
            {/*        role="menuitem"*/}
            {/*      >*/}
            {/*        Your Profile*/}
            {/*      </a>*/}
            {/*      <a*/}
            {/*        href="#"*/}
            {/*        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"*/}
            {/*        role="menuitem"*/}
            {/*      >*/}
            {/*        Settings*/}
            {/*      </a>*/}
            {/*      <a*/}
            {/*        href="#"*/}
            {/*        className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"*/}
            {/*        role="menuitem"*/}
            {/*      >*/}
            {/*        Sign out*/}
            {/*      </a>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*</div>*/}
          </div>
        </div>

        <div className="hidden sm:hidden">
          <div className="px-2 pt-2 pb-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Home
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Team
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Projects
            </a>
            <a
              href="#"
              className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}