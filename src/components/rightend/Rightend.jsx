import React from "react";
import { Search, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";

function TrendingPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("/api/r/popular.json?limit=5")
      .then((res) => res.json())
      .then((data) => {
        const formatted = data.data.children.map((item) => ({
          id: item.data.id,
          title: item.data.title,
          author: item.data.author,
          ups: item.data.ups,
          comments: item.data.num_comments,
        }));
        setPosts(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching trending posts:", error);
        setLoading(false);
        setPosts([]);
      });
  }, []);
  if (loading)
    return <p className="text-gray-400">Loading trending posts...</p>;
  if (posts.length === 0)
    return <p className="text-gray-400">No trending posts available</p>;

  return (
    <div>
      <h2>🔥 Trending</h2>
      {posts.map((post) => (
        <div key={post.id} className=" p-3">
          <h3>{post.title}</h3>
          <p className="text-sm text-gray-500">
            @{post.author} · {post.ups} likes · 💬 {post.comments}
          </p>
        </div>
      ))}
    </div>
  );
}

function Rightend() {
  return (
    <aside className="hidden lg:flex w-[450px] pl-4 pr-4 py-2 bg-black border-l border-[#2f3336] flex-col box-border overflow-y-auto h-screen">
      <div className="flex items-center gap-3 bg-black px-4 py-2 mb-2 rounded-full border border-[#2f3336] focus-within:outline-none focus-within:ring-0 focus-within:border-[#1d9bf0]">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="border border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
          <h1 className="font-bold ">Subscribe to Premium</h1>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button className="bg-[#1c8cd8] px-2 py-1 rounded-xl font-bold w-[100px]">
            Subscribe
          </button>
        </div>
        <div className="border border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
          <h1 className="font-bold">Live on X</h1>
          <div className="flex gap-1">
            <div className="rounded-full w-fit bg-[#ED2224] ">
              <img
                src="/logos/aajtak.jpeg"
                alt="aajtak"
                className="w-6 h-6 object-contain rounded-full"
              />
            </div>
            <p>Aajtak</p>
            <BadgeCheck className="fill-[#1c8cd8]" />
            <p className="text-sm text-gray-400">is hosting</p>
          </div>
          <div className="flex justify-between">
            <p>देखिए अब तक की बड़ी सुर्खियां</p>
            <div className="border-2 border-[#E86666] gap-1 flex  rounded-xl">
              <div className="rounded-full w-fit bg-[#ED2224] ">
                <img
                  src="/logos/aajtak.jpeg"
                  alt="aajtak"
                  className="w-6 h-6 object-contain rounded-full"
                />
              </div>
              <p className="pr-1">+256</p>
            </div>
          </div>
        </div>
        <div className="border border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
          <TrendingPosts />
        </div>
      </div>
    </aside>
  );
}

export default Rightend;
