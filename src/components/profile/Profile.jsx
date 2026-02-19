import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
function Profile() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen">
      <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3">
        <Link key="/app/home" to="/app/home" className=" rounded-full h-[50] ">
          <ArrowLeft />
        </Link>
        <div className="flex flex-col h-12">
          <h1>{user?.username || "Unknown"}</h1>
          <p>number of posts</p>
        </div>
      </div>
      <div className="bg-[#343639] h-56"></div>
      <div className="relative">
        <div className="absolute left-15">
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
            className="w-10 h-10 rounded-full scale-400 "
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
