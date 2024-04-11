import React from "react";
import winterClothes from "../assets/images/winter-clothes.png";
import menclothing from "../assets/images/men-clothing.png";
import watches from "../assets/images/wristwatch.png";
import jewelly from "../assets/images/jewelry.png";
import varsely from "../assets/images/varsity-jacket.png";
import CategoriesType from "./CategoriesType";
import bed from "../assets/images/postel_andromeda_product_n.png";
import medias from "../assets/images/media_new.png";
import pansonic from "../assets/images/Panasonic-Mixer-Ad-Block.png";
import beauty from "../assets/images/beauty-parlour-items-png-3.png";
import elec from "../assets/images/159117_electronics-items-png.png";

export default function Category() {
  const handleSelection = () => {
    //code logic
  };
  return (
    <div className="flex flex-col mt-7 items-center text-center justify-center pb-3 " style={{backgroundColor:"rgb(255,255,240 )"}}>
      <div className="flex flex-row items-center text-center *: space-x-4 rounded-full bg-white border-1 w-98 h-10 p-10">
        <div>
          <h1
            className="font-bold text-xl"
            style={{ textTransform: "uppercase" }}
          >
            Category
          </h1>
        </div>
        <CategoriesType image={menclothing} title="New fashion" />
        <CategoriesType image={winterClothes} title="Clothing" />
        <CategoriesType image={watches} title="Watches" />
        <CategoriesType image={jewelly} title="Accessories" />
        <CategoriesType image={varsely} title="Sweaters & Jackets" />
      </div>
      <div className="flex flex-row mt-10">
        <div className=" flex-col border-1 h-61 p-2 m-2 border-solid rounded-xl ">
          <h1
            style={{ textTransform: "uppercase" }}
            className="font-bold text-xl text-center m-2 "
          >
            {" "}
            UP TO 50% OFF | BEDS
          </h1>
          <img src={bed} alt="bed image" className=" h-60" />
          <a>see more </a>
        </div>
        <div className=" flex-col border-1 h-61 p-2 m-2 border-solid rounded-xl ">
          <h1
            style={{ textTransform: "uppercase" }}
            className="font-bold text-xl text-center m-2 "
          >
            {" "}
            ORGANIZED IN STYLE

          </h1>
          <img src={medias} alt="style" className=" m-2 p-2 h-60 w-60" />
          <a>see more </a>
        </div>

        <div className=" flex-col border-1 h-61 p-2 m-2 border-solid rounded-xl ">
          <h1
            style={{ textTransform: "uppercase" }}
            className="font-bold text-xl text-center m-2 "
          >
            {" "}
            REFURBISHED MIXER


          </h1>
          <img src={pansonic} alt="style" className=" m-2 p-2 h-60 w-60" />
          <a>see more </a>
        </div>

      </div>
      <div className="flex flex-row mt-10">
     
      <div className=" flex-col border-1 h-45  p-2 m-2 border-solid rounded-xl ">
          <h1
            style={{ textTransform: "uppercase" }}
            className="font-bold text-xl text-center m-2 "
          >
            {" "}
            BEAUTY PRODUCTS


          </h1>
          <img src={beauty} alt="style" className=" m-2 p-2 h-60 w-60" />
          <a>SEE MORE </a>
        </div>

        <div className="flex flex-col border-1 bg-white text-bold ml-7 rounded-xl h-45  p-2 m-2">
          <h1 style={{ textTransform: "uppercase" }} className="font-bold">
            EXPLORE TRENDING ELECTRONICS
          </h1>
          <img src={elec} alt="bed image" className="mt-10  w-100" />
          <a
            style={{ textTransform: "uppercase" }}
            className="text-right mt-20 inset-x-11 bottom-0 h-16"
          >
            SEE MORE
          </a>
        </div>
      </div>
    </div>
  );
}
