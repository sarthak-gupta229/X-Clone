import React from "react";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Heart, MessageCircle, Repeat, BarChart2, Trash } from "lucide-react";

export default function PostCard({ postObj }) {
  const { user, userpost, setUserpost } = useContext(UserContext);
  const [userliked, setuserLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const comments = 0;

  function handleDelete() {
    setUserpost(userpost.filter((post) => post !== postObj));
  }

  function handleLike() {
    setLikes(userliked ? likes - 1 : likes + 1);
    setuserLiked(!userliked);
  }

  return (
    <>
      <div className="border-b border-[#2f3336] w-full py-3 px-4 flex gap-3 relative">
        <span className="absolute top-5 right-5">
          <button onClick={handleDelete}>
            <Trash size={16} className=" cursor-pointer hover:text-red-600" />
          </button>
        </span>
        <div>
          <img
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user?.username}`}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="w-full text-left">
          <div className="flex items-center gap-2">
            <h1 className="text-gray-300 font-bold">
              {user?.username || "Unknown"}
            </h1>
            <p className="text-gray-500 text-sm">Posted at {postObj.time}</p>
          </div>
          <p className="text-white mt-1">{postObj.text}</p>

          <div className="flex justify-between text-gray-400 mt-3 text-sm max-w-md">
            <span className="flex items-center gap-1 cursor-pointer">
              <Heart
                size={16}
                fill={userliked ? "red" : ""}
                onClick={handleLike}
              />{" "}
              {likes}
            </span>
            <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
              <MessageCircle size={16} /> {comments}
            </span>
            <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
              <Repeat size={16} />
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 size={16} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
