import React, { useState } from "react";
import { Eye, Plus } from "react-feather";
export default function ProductCard(props) {
  const [preview, setPreview] = useState("hidden");
  return (
    <React.Fragment>
      <div className={"flex flex-col"}>
        <div className={"flex flex-row"}>
          <div
            className={"productCard bg-no-repeat bg-cover rounded-md bg-center"}
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
                  "flex flex-col justify-center relative items-center focus:border-0"
                }
              >
                <Eye color={"white"} size={52} className={`${preview}`} />

                <p className={`${preview} text-white`}>Preview</p>
              </button>

              <button
                className={
                  "absolute bottom-0 rounded-br-md z-20 right-0 bg-brown"
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
        <div className={"details flex flex-row  border-4"}>
          <div className={"flex flex-col  w-1/2"}>
            <p>Ring My Bell</p>
            <div className={"flex flex-row"}>
              <span>Size:</span>
              <select>
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
          <div className={"flex flex-col items-end"}>
            <div className={"flex flex-col items-end"}>
              <span>Colors:</span>
              <select>
                <option>Black and Coffee</option>
                <option>All Black</option>
                <option>All Brown</option>
                <option>Black and brown</option>
                <option>All Coffee</option>
                <option>Brown and Coffee</option>
                <option>All Coffee</option>
              </select>
            </div>
            <div className={"flex flex-row"}>
              <p>No In stock:</p>
              <p>20</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
