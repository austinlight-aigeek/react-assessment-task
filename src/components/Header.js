import React from "react";
import homeImage from "../assets/images/2741840.png";
import { useEffect, useState } from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { TocOutlined } from "@mui/icons-material";
export default function Header() {
  const [seachWord, setSearchWord] = useState("");
  return (
    <div className="bg-purple-600 flex flex-col"  >
      <div className="ml-8">
        <p className="text-white  text-xl font-bold">Caraft</p>
      </div>
      <div class="text-white flex flex-row-reverse space-x-4 space-x-reverse ...">
        <div>
          <TocOutlined type="Outlined" />
        </div>
        <div>
          <SearchOutlinedIcon type="Outlined" />
        </div>
        <div>
          {" "}
          <LocalMallOutlined type="Outlined" />{" "}
        </div>
        <a>Log in</a>
      </div>
      <div className=" flex ml-8 flex-row text-white mt-50">
        <div className="flex flex-row content-center items-center text-center">
          <div className="flex flex-col">
            <div>
              <h1 className="text-7xl text-white font-bold">
                50% Discount <br />
                Online Shop
              </h1>
            </div>
            <div className="p-6 w-30">
              <p>
                <i>
                  there are many variations of passages lorem Ipsum available,
                  but the majority have suffered alternation
                </i>
              </p>
              <button className="bg-yellow-400 w-40 h-15 justify-center rounded-xl text-center font-bold mt-2">
                Shop Now
              </button>
            </div>
          </div>
          <div className="ml-50 flex flex-col justify-end">
            <img src={homeImage} className="img-fluid  " />
            <div className="flex flex-row justify-end p-5">
              <button className="text-white bg-gray-600 font-bold text-lg w-50 ">
                All
              </button>
              <input
                type="text"
                name="search"
                className="w-80 h-10 "
                value={seachWord}
                onChange={(value)=>{setSearchWord(value)}}
                placeholder="enter Keyword"
              />
              <button
                type="submit"
                className="bg-yellow-500 btn btn-info text-white font-bold w-50 border-0"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
