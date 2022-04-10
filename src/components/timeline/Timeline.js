import React, { useState, useEffect } from "react";
import Post from './Post'
import "./Timeline.css"
import Tweetbox from './Tweetbox'
import db from "../../firebase"
import { collection, getDocs, query, orderBy, onSnapshot } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const postData =collection(db, "posts")
    const q = query(postData, orderBy("timestamp", "desc"))

    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
        <Tweetbox/>

        <FlipMove>
          {posts.map((post) => (
            <Post
              key={post.text}
              displayName={post.displayName}
              username={post.username}
              verified={post.verified}
              text={post.text}
              avator={post.avator}
              image={post.image}
            />
          ))}
        </FlipMove>
        
        
      </div>
    </div>
  )
}

export default Timeline;
