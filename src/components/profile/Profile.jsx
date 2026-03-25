import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PostCard from "../post/PostCard";
import Mobilebar from "../mobilebar/Mobilebar";
function Profile() {
  const { user, following, userpost } = useContext(UserContext);
  return (
    <div className="flex-1 border-r border-r-[#2f3336] flex flex-col h-screen text-white">
      <div className="flex-1 overflow-y-auto">
        <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3">
          <Link
            key="/app/home"
            to="/app/home"
            className=" rounded-full h-[50] "
          >
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
          <h1 className="pt-30 text-4xl font-bold">
            {user?.username || "Unknown"}
          </h1>
          <div className="flex gap-5">
            <p className="text-gray-500">
              {"@" + (user?.username || "Unknown")}
            </p>
            <p className="text-gray-500">Following : {following}</p>
          </div>
        </div>
        <div className="px-8 pb-4">
          <h1 className="pt-10 text-1xl pl-2">Posts</h1>
          <div className="border-t-2 border-blue-500 w-16"></div>
        </div>
        <div className="px-2">
          {userpost &&
            userpost.map((post, index) => (
              <PostCard key={index} postObj={post} />
            ))}
        </div>
      </div>

      <Mobilebar />
    </div>
  );
}

export default Profile;
