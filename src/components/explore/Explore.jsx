import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Explore() {
  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen">
      <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3">
        <Link key="/app/home" to="/app/home" className=" rounded-full h-[50] ">
          <ArrowLeft />
        </Link>
      </div>
    </div>
  );
}

export default Explore;
