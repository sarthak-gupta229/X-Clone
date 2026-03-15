import React, { useEffect, useState, useRef } from "react";
import Tweetcard from "../tweetcard/Tweetcard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { RefreshCw } from "lucide-react";

export async function getHNPosts(type = "topstories", limit = 20) {
  const ids = await fetch(
    `https://hacker-news.firebaseio.com/v0/${type}.json`,
  ).then((r) => r.json());

  const stories = await Promise.all(
    ids
      .slice(0, limit)
      .map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
          (r) => r.json(),
        ),
      ),
  );

  return stories.map((s) => ({
    id: s.id,
    title: s.title,
    author: s.by,
    score: s.score,
    comments: s.descendants || 0,
    url: s.url || `https://news.ycombinator.com/item?id=${s.id}`,
    source: s.url ? new URL(s.url).hostname : "news.ycombinator.com",
    created: s.time,
    type: s.type,
  }));
}

export default function Feed() {
  const { posts, setPosts } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loaderRef = useRef(null);
  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    if (loading) return;

    setLoading(true);
    setError(false);

    try {
      const newPosts = await getHNPosts("topstories", 20);

      setPosts((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const filteredNewPosts = newPosts.filter((p) => !existingIds.has(p.id));
        return [...prev, ...filteredNewPosts];
      });
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post) => (
        <Tweetcard key={post.id} post={post} />
      ))}
      <div ref={loaderRef} className="py-6 text-center text-gray-400">
        {loading && "Loading..."}
        {error && (
          <button className="text-blue-500" onClick={fetchPosts}>
            Retry
          </button>
        )}
      </div>
      <div className="flex justify-center items-center w-full">
        <button
          className="text-black px-3 py-1 rounded-full font-semibold "
          onClick={fetchPosts}
        >
          <RefreshCw className="text-white bg-black" />
        </button>
      </div>
    </div>
  );
}
