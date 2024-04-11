import React from "react";
export default function Footer() {
  return (
    <div className="bg-purple-600 text-center items-center p-6 mb-2 ">
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
      <div className="flex flex-row justify-center border-b-2 p-1 w-20 items-center ml-50">
        <input
          type="email"
          className="bg-purple-600"
          placeholder="enter your Email"
        />
        <div className="border-1 rounded-xl bg-pink-400 text-white flex-shrink  ">
          <button>
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
}
