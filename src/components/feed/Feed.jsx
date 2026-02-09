import React from 'react'
import { useEffect,useState } from 'react'
import Tweetcard from '../tweetcard/Tweetcard';

function Feed() {
 const [posts, setPosts]=useState([])
 useEffect(()=>{
    fetch("https://www.reddit.com/r/all/hot.json?limit=10")
    .then(res =>res.json)
    .then(data=>{
          const formatted = data.data.children.map(p => {
          const d = p.data;

          return {
            id: d.id,
            username: d.author,
            time: d.created_utc,
            text: d.title || d.selftext,
            image:
              d.post_hint === "image"
                ? d.url_overridden_by_dest
                : null,
            video: d.media?.reddit_video?.fallback_url || null,
            likes: d.ups,
            comments: d.num_comments
          };
        });
        setPosts(formatted);
    })

 },[]);
  return (
    <div className='max-w-xl mx-auto'>
      {posts.map(post =>(
         <Tweetcard key={post.id} post={post} />
      ))}
  
    </div>
  )
}

export default Feed