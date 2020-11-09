import React, { useState } from "react";
import { Eye, Plus } from "react-feather";
export default function ProductCard(props) {
  const [preview, setPreview] = useState("hidden");
  return (
    <React.Fragment>
      <div className={"flex flex-col mt-10"} data-aos={"fade-up"}>
        <div className={"flex flex-row"}>
          <div
            className={
              "productCard bg-no-repeat bg-cover rounded-lg bg-center "
            }
            style={{ backgroundImage: `url("./Shoe.jpeg")` }}
          >
            <div
              onMouseOver={() => {
                setPreview("block");
              }}
              onMouseOut={() => {
                setPreview("hidden");
              }}
              className={
                "w-full h-full z-50 flex flex-col justify-center relative items-center shadow rounded-md bg-opacity-0 transition duration-700 ease-in-out"
              }
            >
              <button
                onClick={() => alert("modal to view product and details")}
                className={
                  "flex flex-col justify-center relative items-center focus:outline-none"
                }
              >
                <Eye color={"white"} size={52} className={`${preview}`} />

                <p className={`${preview} text-white`}>Preview</p>
              </button>

              <button
                onClick={() => {
                  alert("Product added to cart");
                }}
                className={
                  "absolute bottom-0 rounded-br-md z-20 right-0 bg-brown focus:outline-none"
                }
              >
                <Plus color={"white"} size={40} />
              </button>
            </div>
          </div>

          {/*  price tag */}
          <div className={"relative"}>
            <p
              className={"priceTag text-white relative bg-black font-bold p-4"}
            >
              &#8373; {"200"}
            </p>
          </div>
        </div>
        <div className={"details relative flex flex-col"}>
          <div className={"flex flex-row flex-2"}>
            <p
              className={
                "text-base tracking-tight leading-10 font-bold text-gray-900 sm:text-2xl sm:leading-none md:text-base"
              }
            >
              Ring my bell Pointed dots
            </p>
            <div className={"flex flex-row justify-center items-center"}>
              <spanIn
                className={
                  "text-sm text-gray-500 sm:mt-0 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-0 md:text-sm lg:mx-0"
                }
              >
                Size:
              </spanIn>
              <select
                className={
                  "text-base tracking-tight leading-10 font-bold text-gray-900 sm:text-2xl sm:leading-none md:text-base focus:outline-none"
                }
              >
                <option>38</option>
                <option>39</option>
                <option>40</option>
                <option>41</option>
                <option>42</option>
                <option>43</option>
                <option>44</option>
                <option>45</option>
              </select>
            </div>
          </div>
          <div className={"flex flex-row items-end "}>
            <div className={"flex flex-row items-center flex-1 justify-start"}>
              <p
                className={
                  "text-sm text-gray-500 sm:mt-0 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-0 md:text-sm lg:mx-0 "
                }
              >
                In stock:
              </p>
              <p
                className={
                  "text-base tracking-tight leading-10 font-bold text-gray-900 sm:text-2xl sm:leading-none md:text-base"
                }
              >
                20
              </p>
            </div>
            <div className={"flex flex-col items-end"}>
              <span
                className={
                  "mt-4 text-sm text-gray-500 sm:mt-0 sm:text-sm sm:max-w-xl sm:mx-auto md:mt-4 md:text-sm lg:mx-0"
                }
              >
                Select color:
              </span>
              <select
                className={
                  "text-base tracking-tight leading-10 font-bold text-gray-900 sm:text-2xl sm:leading-none md:text-base focus:outline-none"
                }
              >
                <option>Black and Coffee</option>
                <option>All Black</option>
                <option>All Brown</option>
                <option>Black and brown</option>
                <option>All Coffee</option>
                <option>Brown and Coffee</option>
                <option>All Coffee</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
