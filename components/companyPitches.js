import React from 'react';

export default function Company() {
  return (
    <div className="h-[80vh] w-screen flex justify-center items-center">
      <div className="h-3/5 w-3/5 flex justify-around items-center flex-col">
        <div className="  ">
          <div className="flex justify-between">
            <h3 className="text-blue-800 text-5xl">Company Pitches</h3>
            <p>[10.00 - 12.00]</p>
          </div>

          <p className="text-base">
            During the morning, a selection of the companies will showcase their
            organizational culture and exciting job openings. Learn about
            company strategy, growth trajectories, and what they look for in
            prospective candidates. Pose your burning questions to recruiters
            during dedicated Q&A sessions.
          </p>
          <p4 className="text-5xl">✨</p4>
          <p className="text-base">
            During this two-hour journey of professional discovery, gain
            exclusive insights into job opportunities and positions that align
            with your skills and aspirations.
          </p>

          <div className="text-base">
            <p>10.00 AkzoNobel</p>
            <p>10.15 Argent Energy</p>
            <p>10.30 Skytree</p>
            <p>10.45 Caffe Inc</p>
            <p>11.00 Oxford GR</p>
            <p>11.15 Medstone</p>
            <p>11.30 Brineworks</p>
            <p>11.45 NWO</p>
          </div>
        </div>
      </div>
    </div>
  );
}
