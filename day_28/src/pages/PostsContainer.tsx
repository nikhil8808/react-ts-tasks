import React, { useState,useEffect,useRef } from 'react'
import useFetchPosts from '../hooks/useFetchPosts'
import './css/post_container.css'
import PostCard from '../components/PostCard'

interface Post {
    image: string;
    title: string;
    description: string;
    author: string;
    date: string;

}

const PostsContainer = () => {
    const [pageData, setPageData] = useState({
        limit: 10,
        skip: 0
    })
   
    const { data, error, isLoading } = useFetchPosts(`https://dummyjson.com/posts?limit=${pageData?.limit}&skip=${pageData?.skip}`)
   const containeRef=useRef(null)
  const [posts,setPosts]=useState(data?.posts)

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
       const el = e.currentTarget;
       console.log(el.scrollHeight,el.scrollTop,el.clientHeight)
      const isBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 2;

    if (isBottom) {
      setPageData((prev)=>({
        ...prev,
        skip:prev?.skip+prev.limit
      }))
    }
  };
  useEffect(() => {
  if (data?.posts) {
    setPosts(prev => [...(prev || []), ...data.posts]);
  }
}, [data]);



    return (
        <div className='post_container' ref={containeRef}  onScroll={handleScroll}>
            {posts?.length > 0 && posts?.map((post:Post) => {
                return <PostCard
                    image={post?.image}
                    title={post?.title}
                    description={post?.description}
                    author={post?.author}
                    date={post?.date}


                />

            })}

        </div>
    )
}

export default PostsContainer