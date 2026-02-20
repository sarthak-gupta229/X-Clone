import React from "react";
import { BadgeCheck } from "lucide-react";
import { useState } from "react";

function FollowCard({ post, following, setfollowing }) {
  const [follow, setfollow] = useState(false);

  function handlefollow() {
    const nextFollow = !follow;
    setfollow(nextFollow);
    if (nextFollow) {
      setfollowing((prev) => prev + 1);
    } else {
      setfollowing((prev) => prev - 1);
    }
  }

  return (
    <div className="flex py-5 px-6 gap-2 justify-between">
      <div className="flex gap-4">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.username}`}
          className="w-10 h-10 rounded-full"
        />
        <h1>{post.username}</h1>
        <span>
          <BadgeCheck fill="" />
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
