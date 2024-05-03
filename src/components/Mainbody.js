import React from "react";
import BGGIF from "../assets/images/jaishreeram.gif";
import Back from "../assets/images/Jaijaishreeram.gif";

const Mainbody = () => {
  return (
    <div className="h-120 bg-white-50 flex items-right uparChadha">
      <section
        className="bg-cover bg-center py-52 w-full relative"
        style={{
          // backgroundImage: `url(${BGImage})`
          backgroundImage: `url(${BGGIF})`,
        }}>
        <div className="container mx-auto text-left text-white">
          <div className="flex items-center">
            <div className="w-1/2">
              <h1 className="text-7xl font-medium mb-10 mt-20">
                Welcome to <strong>Ntechzy</strong>
              </h1>
              <p className="text-2xl mb-12">
                Your Path to <strong>Digital Dominance.</strong>
              </p>
              <a
                href="#"
                className="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">
                See More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mainbody;
