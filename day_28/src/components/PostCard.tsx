import React from 'react'
import './post_card.css'

interface PostCardProps{
    image:string;
    title:string;
    description:string;
    author:string;
    date:string;
}

const PostCard = ({image,title,description,author,date}:PostCardProps) => {
  return (
     <div className="post-card">
      <img src={"https://plus.unsplash.com/premium_photo-1700996706577-c299866f294e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt={title} className="post-card-img" />

      <div className="post-card-body">
        <h3 className="post-card-title">{title}</h3>
        <p className="post-card-description">{description}</p>

        <div className="post-card-footer">
          <span className="post-card-author">{author}</span>
          <span className="post-card-date">{date}</span>
        </div>
      </div>
    </div>
  )
}

export default PostCard