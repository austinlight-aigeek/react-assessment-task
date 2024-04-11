import React from "react";
import clothes from "../assets/images/men-shirts-500x500 copy.png"
import cl from "../assets/images/404314_preview.png"
import dress1 from "../assets/images/dress_PNG135.png"
import dress2 from "../assets/images/girl-in-summer-clothes-png-kidtopia-baby-girls-infant-tiered-with-daisy-eyelet-yoke-knit-baby-girl-party-dress-836.png"

export default function FeatureProduct() {
  return (
    <div className="container mt-20 p-10 ml-80" >
      <div className="flex flex-col">
        <h1 className="font-bold text-center text-2xl">FEATURED PRODUCTS</h1>
        <p className="text-center mt-1">
          <i>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking
          </i>
        </p>
      </div>
      <div className="flex flex-row mt-3">
        <div className="flex flex-col">
            {/* items1 */}
            <div className="flex flex-col  border-0 rounded-lg bg-white">
                <h1 className="font-bold text-2xl mt-2 text-center">READABLE CONTENT OF</h1>
                <div className="flex flex-row mt-3 bg-white">
                <img src={clothes} alt="dkd," className="ml-4"/>
                <img src={clothes} alt="sdkd,"  className="ml-4"/>
                </div>
            </div>
            {/* item2 */}
            <div className="flex flex-col  border-0 mt-4 rounded-lg bg-white">
                <h1 className="font-bold text-2xl mt-2 text-center">READABLE CONTENT OF</h1>
                <div className="flex flex-row mt-3">
                <img src={cl} alt="dkd," className="ml-5"/>
                </div>
            </div>
        </div>




        <div className="ml-10 flex-col border-0 rounded-lg text-center items-center bg-white">
        <h1 className="font-bold text-center text-2xl">READABLE CONTENT OF</h1>
        <div className="flex flex-row">
        <img src={dress1} alt="dress img" className="img-fluid"/>
        <img src={dress2} alt="dress img" className="img-fluid"/>

        </div><p className="text-center ">
        <a>see more</a></p>
        </div>
      </div>
    </div>
  );
}
