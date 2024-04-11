import React from "react";
import HumanPhoto from "../assets/images/arrul-lin-sYhUhse5uT8-unsplash.png";
export default function Customer() {
  return (
    <div className="flex flex-col items-center text-center justify-center">
      <div className="flex flex-col ">
        <h1 className="font-bold   text-center text-2xl">
          WHAT OUR CUSTOMER SAYS
        </h1>
        <p className="font-light text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking
        </p>
      </div>
      <div className="text-justify items-left border-1 rounded-xl mt-5 mb-10 p-5 w-50">
  <div className=" flex flex-col items-left justify-left">
    <img src={HumanPhoto} alt="human photo" className="h-20 w-20 img-fluid"/>
    <h1 className="font-bold text-xl text-left ">
      Normal Distribution
    </h1>
  </div>
  <div className="text-left items-center justify-left">
    <p className="text-left" style={{ textTransform: "capitalize" }}>
      It is a long established fact that a reader will be distracted by
      the readable content of a page when looking at its layout. The point
      of using Lorem Ipsum is that it has a more-or-less normal
      distribution of letters, as opposed to using 'Content here, content
    
    </p>
  </div>
</div>

    </div>
  );
}
