import React, { useEffect, useState, useRef } from "react";
import Tweetcard from "../tweetcard/Tweetcard";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

export default function Feed() {
  // const [posts, setPosts] = useState([]);
  const { posts, setPosts } = useContext(UserContext);
  const [after, setAfter] = useState(null);
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
      let url = "/api/reddit";
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.status);

      const data = await res.json();

      const newPosts = data.data.children.map(({ data: d }) => ({
        id: d.id,
        username: d.author,
        time: d.created_utc,
        text: d.title || d.selftext,
        image: d.post_hint === "image" ? d.url_overridden_by_dest : null,
        video: d.media?.reddit_video?.fallback_url || null,
        likes: d.ups,
        comments: d.num_comments,
      }));

      setPosts((prev) => [...prev, ...newPosts]);
      setAfter(data.data.after);
    } catch (err) {
      setError(true);
    }

    setLoading(false);
  }

  return (
    <div className="max-w-xl mx-auto">
      {posts.map((post) => (
        <Tweetcard key={post.id} post={post} />
      ))}
      <div ref={loaderRef} className="py-6 text-center">
        {loading && "Loading..."}
        {error && <button onClick={fetchPosts}>Retry</button>}
      </div>
      <button
        className="bg-white text-black px-3 rounded-4xl "
        onClick={fetchPosts}
      >
        reload
      </button>
    </div>
  );
}
