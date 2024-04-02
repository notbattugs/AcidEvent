import React from 'react';
import { Inter } from 'next/font/google';

export default function Organised() {
  return (
    <div className="h-auto lg:h-[50vh] w-screen bg-gradient-to-b from-slate-50 to-bg[#000] flex justify-center items-center p-2">
      <div className="w-[78%] h-auto flex justify-center items-center flex-col gap-1">
        <div className="h-1/2 w-full flex justify-around items-center flex-col lg:flex-row gap-1">
          <div className="w-full lg:1/3 h-full">
            <img
              src="https://i.ibb.co/xq4xtZF/image.png"
              className="w-full f-hull"
            ></img>
          </div>
          <div className="w-full lg:1/3 h-full">
            <img
              src="https://i.ibb.co/7pVXW5Y/image.png"
              className="w-full f-hull"
            ></img>
          </div>
          <div className="w-full lg:1/3 h-full">
            <img
              src="https://i.ibb.co/jJY7mTc/image.png"
              className="w-full f-hull"
            ></img>
          </div>
        </div>
        <div className="h-1/2 w-full flex justify-around items-center flex-col lg:flex-row gap-1">
          <div className="w-full lg:1/4 h-full bg-[#dde0fa]">
            <img
              src="https://i.ibb.co/4mJdwyZ/image.png"
              className="w-full f-hull"
            ></img>
          </div>
          <div className="w-full lg:1/4 h-full bg-[#dde0fa]">
            <img
              src="https://i.ibb.co/4J1NgQW/image.png"
              className="w-full f-hull"
            ></img>
          </div>
          <div className="w-full lg:1/4 h-full bg-[#dde0fa]">
            <img
              src="https://i.ibb.co/hWsVvB1/image.png"
              className="w-full f-hull"
            ></img>
          </div>
          <div className="w-full lg:1/4 h-full bg-[#dde0fa]">
            <img
              src="https://i.ibb.co/9prh7Hw/image.png"
              className="w-full f-hull"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
