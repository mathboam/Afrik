import React from "react";
import { Search } from "react-feather";
import Options from "./Options";
export default function Filter() {
  return (
    <React.Fragment>
      <div className={"flex justify-center items-center w-full mt-16 flex-col"}>
        <div className={"flex relative items-center flex-row w-4/5 h-10 p-1"}>
          <span className={"text-gray-400 "}>filter by ...</span>
          <div className={"flex flex-row space-x-3"}>
            <Options />
            <Options />
            <Options />
          </div>
          <button
            className={
              "absolute right-0 bg-brown h-full w-12 flex justify-center items-center font-bold focus:outline-none"
            }
            onClick={() => {
              alert("searching...");
            }}
          >
            <Search color={"white"} />
          </button>
        </div>
        <div className={"border w-4/5 mt-4"}></div>
      </div>
    </React.Fragment>
  );
}
