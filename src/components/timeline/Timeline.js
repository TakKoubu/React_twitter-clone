import React from 'react'
import Post from './Post'
import "./Timeline.css"
import Tweetbox from './Tweetbox'

function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline--header">
        <h2>ホーム</h2>
        <Tweetbox/>
        <Post
          displayName="プログラミングチュートリアル"
          username="Shin_Engineer"
          verified={true}
          text="初めてのツイート"
          avator="http://shincode.info/wp-content/uploads/2021/12/icon.png"
          image="https://source.unsplash.com/random"
        />
      </div>
    </div>
  )
}

export default Timeline
