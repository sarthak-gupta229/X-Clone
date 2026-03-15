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
  const [likes, setLikes] = useState(post.score || post.likes || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    setLiked(!liked);
  };

  const username = post.author || post.username || "Anonymous";
  const text = post.title || post.text;

  return (
    <div className="border-b border-gray-800 p-4 hover:bg-gray-950 transition">
      {/* headerr */}
      <div className="flex gap-3">
        <img
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${username}`}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-1 flex-wrap">
            <span className="font-semibold text-white">{username}</span>
            {post.source && (
              <span className="text-gray-500 text-sm">@{post.source}</span>
            )}
            <BadgeCheck className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-white mt-1 text-[15px]">{text}</p>

          {post.url && !post.image && !post.video && (
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1d9bf0] hover:underline text-sm block mt-1 truncate"
            >
              {post.url}
            </a>
          )}
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
          className="flex items-center gap-1 cursor-pointer hover:text-red-500"
          onClick={handleLike}
        >
          <Heart
            size={16}
            fill={liked ? "red" : "transparent"}
            color={liked ? "red" : "currentColor"}
          />{" "}
          {likes}
        </span>
        <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <MessageCircle size={16} /> {post.comments || 0}
        </span>
        <span className="flex items-center gap-1 hover:text-green-400 cursor-pointer">
          <Repeat size={16} />
        </span>
        <span className="flex items-center gap-1 hover:text-blue-400 cursor-pointer">
          <BarChart2 size={16} />
        </span>
      </div>
    </div>
  );
}

export default Tweetcard;
