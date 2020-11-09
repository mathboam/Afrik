import React from "react";

export default function Footer(props) {
  return (
    <React.Fragment>
      <footer className={"flex items-center flex-col"} data-aos={"fade-up"}>
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
              Quality shoes for gents at an affordable price. Contact us on the
              following addresses and phones for any enquiries and clarification
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
              Adenta (Accra-Ghana)
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
    </React.Fragment>
  );
}
