import React from 'react'
import Post from './Post'

function PostList(props) {
    return (
        <div className=" m-8 grid grid-cols-2  gap-20">
           {props.posts.map(post => <Post
             key={post.id} 
             id={post.id}
             image={post.img_path}
             title={post.name}
             address={post.price}
             description={post.description}
             />)}
        </div>
    )
}

export default PostList
