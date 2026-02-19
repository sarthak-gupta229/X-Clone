import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen text-white">
      <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3">
        <Link key="/app/home" to="/app/home" className=" rounded-full h-[50] ">
          <ArrowLeft />
        </Link>
        <div className="flex flex-col h-12">
          <h1>{user?.username || "Unknown"}</h1>
          <p>number of posts</p>
        </div>
      </div>
      <div className="bg-[#343639] h-56 overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/0a/0b/60/0a0b602cbcc958beba410b9d04b6c4b8.gif"
          alt="loading"
          className=" object-cover w-full h-full"
        />
      </div>
      <div className="relative">
        <div className="absolute left-20">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
            className="w-10 h-10 rounded-full scale-400 "
          />
        </div>
      </div>
      <div className="pl-10">
      <h1 className="pt-30 text-4xl font-bold" >{user?.username || "Unknown"}</h1>
      <p className="text-gray-500">{ "@"+(user?.username || "Unknown")}</p>
      </div>
    </div>
  );
}

export default Profile;
