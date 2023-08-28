import Image from 'next/image';
import React from 'react';
import anime from '../../public/anime.webp';

function index() {
  return (
    <div>
      <div className="relative">
        <header className="header">
          <Image
            src={anime}
            alt="bg-img"
            className="w-full"
            width="500"
            height="500"
          ></Image>
          <div className="absolute top-10 left-10">
            <h1 className="text-6xl font-extrabold text-red-600">--</h1>
            <h1 className="text-6xl text-black font-extrabold w-64">
              PARALLAX EFFECT BY HIMANSHU MAURYA
            </h1>
            <p className="w-96 text-lg mt-5">
              This is a free landing page template you can use for your
              projects. It is free to use for your personal and commercial
              projects, enjoy!
            </p>
            <h1 className="text-6xl font-extrabold text-red-600">--</h1>
            <button className="border-2 border-black bg-white w-60 h-10 font-bold mt-5 hover:text-blue-600 hover:border-blue-600">
              START CREATING TODAY
            </button>
          </div>
        </header>
      </div>
      <div>
        <h1 className="text-3xl h-96">We are here to help you.</h1>
      </div>
    </div>
  );
}

export default index;
