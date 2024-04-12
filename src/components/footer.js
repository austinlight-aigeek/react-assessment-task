import React from "react";
import FooterTabs from "./footerTabs";
export default function Footer() {
  return (
    <>
    <div className="bg-purple-600 text-center  p-6 mb-2 ">
      <div className="flex flex-col text-white">
        <h3 style={{ textTransform: "uppercase" }}>connect to Caraft</h3>
        <h1
          style={{ textTransform: "capitalize" }}
          className="text-2xl text-white  font-semibold "
        >
          join our newsletter
        </h1>
      </div>
      <div>
        <p className="text-white text-center">
          There are many variations of passages <br />
          of Lorem Ipsum available, but the majority have <br />
          suffered alteration
        </p>
      </div>
      <div className="border-b-2 flex flex-row  justify-end  w-30">
        <input
          placeholder="Enter  your Email "
          type="text"
          className="form-input border-0 bg-purple-600 "
        />
        <button className="bg-white text-purple-600 rounded-xl w-40">Suscribe</button>
      </div>
    </div>
          <FooterTabs/>
          </>
  );
}
