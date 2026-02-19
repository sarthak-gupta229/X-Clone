import React from "react";
import Feed from "../feed/Feed";
import ToLogin from "../loginbutton/ToLogin";

function Home() {
  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen flex flex-col  ">
      <h1>hi</h1>
      <div className="flex flex-col h-fit">
        <Feed />
      </div>
    </div>
  );
}

export default Home;
