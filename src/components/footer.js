import React from "react";
export default function Footer() {
  return (
    <div className="bg-purple-600 text-center items-center h-100 ">
      <div className="flex flex-col text-white">
        <h3>connect to Caraft</h3>
        <h1
          style={{ textTransform: "capitalize" }}
          className="text-lg text-white  font-bold"
        >
          join our newsletter
        </h1>
      </div>
      <div>
        <p>
          There are many variations of passages <br />
          of Lorem Ipsum available, but the majority have <br />
          suffered alteration
        </p>
      </div>
    


      <footer className="flex flex-row bg-black text-white mt-3 w-100 h-300">
        <div className="text-white w-50 flex flex-col ">
          <div className="text-center text-white ">
            <h1 className="font-bold text-center">Category</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration There are many
              variations of passages of Lorem Ipsum available, but the majority
              have suffered alteration
            </p>
          </div>
        </div>

        <div className="text-white w-50 flex flex-col ">
          <div className="text-center text-white ">
            <h1 className="font-bold text-center">Usefull Link</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but
              <br />
              the majority have suffered alteration There are many variations of
              passages of Lorem Ipsum available,
              <br /> but the majority have suffered alteration
            </p>
            <h1>Follow us</h1>
          </div>
        </div>
        <div className="text-white w-50 flex flex-col ">
          <div className="text-center text-white ">
            <h1 className="font-bold text-center">Contact US</h1>
            <p>+1229 26372837628 +1229 26372837628</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
