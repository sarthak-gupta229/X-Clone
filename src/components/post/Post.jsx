import React from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Earth } from "lucide-react";
import { useState } from "react";

function Post() {
  const [post, setPost] = useState("");
  const { user, following, userpost, setUserpost } = useContext(UserContext);
  function handlePost() {
    setUserpost([...userpost, post]);
    setPost("");
  }
  return (
    <>
      <div className=" border-1 border-[#2f3336] w-full py-3 px-2">
        <div className="flex py-3 px-2 h-fit w-full">
          <div className="h-fit">
            <img
              src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
              className="w-10 h-10 rounded-full  "
            />
          </div>
          <div className="py-2 px-2 h-fit w-full">
            <textarea
              type="text"
              className="w-full text-2xl border-none outline-none h-fit"
              placeholder="What's happening?!"
              value={post}
              onChange={(e) => setPost(e.target.value)}
            />
          </div>
        </div>
        <div class="border-t border-[#2f3336] w-[95%] p-3.5"></div>
        <div className="flex justify-between">
          <span className="flex gap-2">
            <Earth className="text-blue-500" />
            <p className="text-blue-500">Everyone can see your post</p>
          </span>
          <button
            className="bg-white  text-black px-3 rounded-4xl py-2 "
            onClick={post ? handlePost : () => {}}
          >
            Post
          </button>
        </div>
      </div>
    </>
  );
}

export default Post;
