import React from "react";
import { useEffect, useState, useRef, useCallback } from "react";
import Tweetcard from "../tweetcard/Tweetcard";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [after, setAfter] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const loaderRef = useRef(null);

  const fetchPosts = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(false);

    const url = `/api/r/all/hot.json?limit=10${after ? `&after=${after}` : ""}`;

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      const newPosts = data.data.children.map((p) => {
        const d = p.data;
        return {
          id: d.id,
          username: d.author,
          time: d.created_utc,
          text: d.title || d.selftext,
          image: d.post_hint === "image" ? d.url_overridden_by_dest : null,
          video: d.media?.reddit_video?.fallback_url || null,
          likes: d.ups,
          comments: d.num_comments,
        };
      });

      setPosts((prev) => [...prev, ...newPosts]);
      setAfter(data.data.after);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [loading, after]);

  // initial load
  useEffect(() => {
    fetchPosts();
  }, []);

  // observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchPosts(); 
        }
      },
      { threshold: 0.1, rootMargin: "500px" },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => observer.disconnect();
  }, [fetchPosts]); 

  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post) => (
        <Tweetcard key={post.id} post={post} />
      ))}

      {/* Loader */}
      <div ref={loaderRef} className="py-6 text-center text-gray-500">
        {loading ? (
          "Loading..."
        ) : error ? (
          <button
            onClick={() => fetchPosts()}
            className="text-blue-500 hover:underline"
          >
            Error loading posts. Retry?
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
}
