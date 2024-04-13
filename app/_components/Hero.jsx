// import React from "react";
import Constant from "../utils/Constant";

export default function Hero() {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Upload.Save and easily
            <span className="sm:block"> Share your files in one place </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            {Constant.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded border border-blue-600 bg-primary px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
              href="/upload"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
