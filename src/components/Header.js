import React from "react";
import homeImage from "../assets/images/2741840.png";
import { useEffect, useState } from "react";
import { LocalMallOutlined } from "@mui/icons-material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { TocOutlined } from "@mui/icons-material";
export default function Header() {
    const [seachWord, setSearchWord]= useState("");
  return (
    <div className="bg-purple-600 flex flex-col">
      <div className="ml-8">
        <p className="text-white text-lg text-">Caraft</p>
      </div>
      <div class="text-white flex flex-row-reverse space-x-4 space-x-reverse ...">
        <div><TocOutlined type="Outlined"/></div>
        <div><SearchOutlinedIcon type="Outlined"/></div>
        <div> <LocalMallOutlined type="Outlined"/> </div>
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
            <div className="p-6">
              <p>
                <i>
                  there are many variations of passages lorem Ipsum available,
                  but the majority have suffered alternation
                </i>
              </p>
            </div>
            <div className="m-50 ">
              <div className="bg-yellow-500 rounded-xl w-18 items-center justify-center"></div>
            </div>
          </div>
          <div className="ml-50">
            <img src={homeImage} />
          </div>
        </div>
        

      </div>
      
        {/* category tab  */}
        <div  className="flex ml-12 rounded-sm flex-row-reverse border-12  ">
         <div className="rounded-sm bg-yellow-400 w-30 h-7">
            <a>
            Search
            </a>
         </div>
         < div className="w-10">
            <input type="text" className="border-1 rounded-lg" value={seachWord}/>
         </div>
         <div className="bg-gray-700 text-white w-14 rounded-lg">
                All
         </div>
        </div>
    </div>
  );
}
