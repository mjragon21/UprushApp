import React from "react";
import { man } from  '../assets/index';

function Banner() {
  return (
    <div className="max-w-screen h-600 flex justify-center bg-red-900 text-white">
      <div className="w-1400 flex items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl">
            Find the perfect <span className="italic font-light">HR Service</span> services for your business
          </h1>
          
          </div>
          
        </div>
        <div className="h-100">
          <img className="h-full object-contain" src={ man } alt="man" />
        </div>
      </div>
    
  );
}

export default Banner;
