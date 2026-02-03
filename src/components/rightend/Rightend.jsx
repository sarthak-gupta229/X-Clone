import React from "react";
import { Search } from "lucide-react";

function Rightend() {
  return (
    <aside className="hidden lg:block w-[350px] px-4 py-2 bg-black border-l-1 border-l-[#2f3336] flex flex-col">
      <div className="flex items-center gap-3 bg-black px-4 py-2 rounded-full border-1 border-[#2f3336] focus-within:outline-none focus-within:ring-0 focus-within:border-[#1d9bf0]">
        <Search size={20} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
        />
      </div>
    </aside>
  );
}

export default Rightend;
