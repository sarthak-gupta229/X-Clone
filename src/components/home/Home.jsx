import React from "react";
import Feed from "../feed/Feed";
import ToLogin from "../loginbutton/ToLogin";
import Post from "../post/Post";
import PostCard from "../post/PostCard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Home() {
  const { userpost } = useContext(UserContext);

  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen flex flex-col  ">
      <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-4 z-10 sticky top-0 bg-black/80 backdrop-blur-md">
        <h1>Home</h1>
      </div>
      <div className="flex flex-col h-fit">
        <Post />
        {userpost &&
          userpost.map((singlePost, index) => (
            <PostCard key={index} postText={singlePost} />
          ))}
        <Feed />
      </div>
    </div>
  );
}

export default Home;
