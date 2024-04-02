import React from 'react';
import { Inter } from 'next/font/google';

export default function Overview() {
  return (
    <div className="h-auto w-screen bg-gradient-to-b from-[#5563e6] to-slate-50">
      <div className="flex justify-center">
        <div className="flex items-start justify-between flex-col lg:flex-row bg-white h-1/2 w-[74%] px-10 py-10 pb-32">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="w-1 h-1 bg-[#5563e6]"></div>
            <h1 className="text-base ml-2 uppercase font-mono">Overview</h1>
          </div>
          <h1 className="text-xs font-base w-full lg:2/5">
            At ACID the alchemy of chemistry, life sciences, research and
            industry converge. An inspiring afternoon of top-notch speakers will
            satisfy your scientific curiosity. Plenty of time for networking is
            a key ingredient of the program. Moreover, this edition features an
            exclusive 1-day career fair, where businesses and talent from the
            region of Amsterdam come together.
          </h1>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1 justify-center w-[74%]">
          <div className="p-6 bg-[#5563e6] flex flex-col justify-between w-full gap-10">
            <h1 className="text-xl text-white font-mono">Company Stands</h1>
            <h1 className="text-8xl text-white font-bold text-right tracking-tighter">
              15+;
            </h1>
          </div>
          <div className="p-6 bg-[#5563e6] flex flex-col justify-between w-full gap-10">
            <h1 className="text-xl text-white font-mono">Career Workshops</h1>
            <h1 className="text-8xl text-white font-bold text-right tracking-tighter">
              3
            </h1>
          </div>
          <div className="p-6 bg-[#5563e6] flex flex-col justify-between w-full gap-10">
            <h1 className="text-xl text-white font-mono">Parallel Sessions</h1>
            <h1 className="text-8xl text-white font-bold text-right tracking-tighter">
              4
            </h1>
          </div>
          <div className="p-6 bg-[#5563e6] flex flex-col justify-between w-full gap-10">
            <h1 className="text-xl text-white font-mono">Keynote Speakers</h1>
            <h1 className="text-8xl text-white font-bold text-right tracking-tighter">
              20+
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
