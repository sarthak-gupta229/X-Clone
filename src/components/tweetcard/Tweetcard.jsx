import React from "react";
import { useState } from "react";
import {
  MessageCircle,
  Repeat,
  Heart,
  BarChart2,
  BadgeCheck,
} from "lucide-react";

function Tweetcard({ post }) {
  const [likes, setLikes] = useState(post.likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked((prevLiked) => {
      setLikes((prevLikes) => (prevLiked ? prevLikes - 1 : prevLikes + 1));
      return !prevLiked;
    });
  };
  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-950 transition">
      {/* headerr */}
      <div className="flex gap-3">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${post.username}`}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-white">{post.username}</span>
            <span></span>
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-white mt-1 text-[15px]">{post.text}</p>
        </div>
      </div>
      {/* mediaa */}
      {(post.image || post.video) && (
        <div className="relative mt-3 rounded-2xl overflow-hidden border border-gray-800">
          {post.video ? (
            <video
              src={post.video}
              className="w-full max-h-[500px] object-cover"
              muted
              loop
              autoPlay
            />
          ) : (
            <img src={post.image} className="w-full object-cover" />
          )}
        </div>
      )}
      {/* liks etc */}
      <div className="flex justify-between text-gray-400 mt-3 text-sm max-w-md">
        <span
          className="flex items-center gap-1 cursor-pointer"
          onClick={handleLike}
        >
          <Heart size={16} fill={liked ? "red" : ""} /> {likes}
        </span>
        <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <MessageCircle size={16} /> {post.comments}
        </span>
        <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
          <Repeat size={16} />
        </span>
        <span className="flex items-center gap-1">
          <BarChart2 size={16} />
        </span>
      </div>
    </div>
  );
}

export default Tweetcard;
