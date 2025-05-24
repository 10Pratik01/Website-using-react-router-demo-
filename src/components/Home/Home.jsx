import React from 'react';
import { Link } from 'react-router-dom';
import home_img1 from '../../assets/home_img1.jpg';
import home_img2 from '../../assets/home_img2.png';

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4">
      {/* Hero Section */}
      <aside className="relative overflow-hidden text-black rounded-lg py-16 sm:py-24 sm:mx-16 mx-2">
        <div className="relative z-10 max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-right space-y-6 md:pr-10">
            <h2 className="text-4xl font-extrabold sm:text-5xl leading-tight">
              Download Now
              <span className="block text-orange-700 mt-2">Lorem Ipsum</span>
            </h2>
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-800 transition"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="mr-2"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              Download Now
            </Link>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
            <img
              src={home_img1}
              alt="image1"
              className="w-72 sm:w-96 object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </aside>

      {/* Middle Section Image */}
      <div className="grid place-items-center mt-16 mb-10">
        <img className="w-48 sm:w-96 object-contain" src={home_img2} alt="image2" />
      </div>

    </div>
  );
}
