import React from "react";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function FollowCard({ post, following, setfollowing }) {
  const { userfollowing, setuserfollowing } = useContext(UserContext);
  const [follow, setfollow] = useState(false);

  function handlefollow() {
    const nextFollow = !follow;
    setfollow(nextFollow);
    if (nextFollow) {
      setfollowing((prev) => prev + 1);
      setuserfollowing((prev) => [
        ...prev,
        { username: post.username, avatar: post.avatar, status: nextFollow },
      ]);
    } else {
      setfollowing((prev) => prev - 1);
      setuserfollowing((prev) =>
        prev.filter((item) => item.username !== post.username),
      );
    }
  }

  return (
    <div className="flex py-5 px-6 gap-2 justify-between">
      <div className="flex gap-4">
        <img
          src={post.avatar}
          onError={(e) => {
            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${post.username}`;
          }}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col ">
          <h1>{post.name}</h1>
          <h1 className="text-gray-500">@{post.username}</h1>
        </div>

        <span>
          <BadgeCheck className="text-blue-500" />
        </span>
      </div>
      <div>
        <button
          className="bg-white  text-black px-3 rounded-4xl py-2 "
          onClick={handlefollow}
        >
          {follow ? "Unfollow" : "Follow"}
        </button>
      </div>
    </div>
  );
}

export default FollowCard;
