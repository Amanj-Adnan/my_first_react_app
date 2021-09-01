import { useContext } from 'react'
import FvaContext from '../store/fav-context'
import PostList from "../components/PostList"


import React from 'react'

function Fav() {
  const  postsLiked = useContext(FvaContext) 
    return (
        <section>
            <p className="font-bold text text-2xl">Liked Posts</p>
             <PostList posts={postsLiked.favs}/>
        </section>
    )
}

export default Fav
