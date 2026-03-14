import React from "react";
import { Search, BadgeCheck } from "lucide-react";
import { useState, useEffect } from "react";
import "../../index.css";

function TrendingPosts() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`/api/news?category=general&lang=en`);
        if (!res.ok) {
          throw new Error(`Server Error: ${res.status}`);
        }

        const data = await res.json();
        // console.log(data);

        const extracted = data.articles.map((article) => ({
          source: article.source.name,
          title: article.title,
          description: article.description,
          image: article.image,
          url: article.url,
          publishedAt: article.publishedAt,
        }));

        setNews(extracted);
      } catch (err) {
        console.log("Error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);
  if (loading)
    return <p className="text-gray-400">Loading trending posts...</p>;

  return (
    <div>
      <h1 className="font-bold mb-2.5">Trending News</h1>
      {news.map((article, index) => (
        <div key={index}>
          <img src={article.image} alt={article.title} />
          <h3 className="mt-3">{article.title}</h3>
          <p className="text-gray-600">@{article.source}</p>
          <p className="text-gray-400">{article.description}</p>
          <a href={article.url} target="_blank">
            Read More
          </a>
          <div class="border-t border-[#2f3336] w-[95%] p-3.5"></div>
        </div>
      ))}
    </div>
  );
}

function Rightend() {
  return (
    <aside className="hidden lg:block w-[450px] pl-4 pr-25 py-2 bg-black border-l-1 border-l-[#2f3336] flex flex-col  box-border overflow-y-auto h-screen">
      <div className="flex items-center gap-3 bg-black px-4 py-2 mb-2 rounded-full border-1 border-[#2f3336] focus-within:outline-none focus-within:ring-0 focus-within:border-[#1d9bf0]">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-1  border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
          <h1 className="font-bold ">Subscribe to Premium</h1>
          <p>
            Subscribe to unlock new features and if eligible, receive a share of
            revenue.
          </p>
          <button className="bg-[#1c8cd8] px-2 py-1 rounded-xl font-bold w-[100px]">
            Subscribe
          </button>
        </div>
        <div className="border-1  border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
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
            <div className="flex items-center gap-2">
              <span className="record-dot"></span>
            </div>
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
        <div className="border-1  border-[#2f3336] h-fit rounded-xl text-left p-4 flex flex-col gap-2">
          <TrendingPosts />
        </div>
      </div>
      <hr class="border-t border-[#2f3336] my-4" />
      <p className="text-xs text-[#2f3336] text-center">
        Terms of Service | Privacy Policy | Cookie Policy | Accessibility | Ads
        info | More © 2026 X Corp.
      </p>
    </aside>
  );
}

export default Rightend;
