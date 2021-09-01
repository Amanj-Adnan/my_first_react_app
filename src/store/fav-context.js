import { createContext, useState} from "react";

import React from 'react'


const FvaContext = createContext({
    favs: [],
    totalfavs: 0,
    addlike : (likedpost) => {},
    removelike : (postId) => {},
    itemIsLiked : (postId) => {},

});

export function FavContextProvider(props) {
     const [userFavs , setUserFavs] = useState([]);
   
     const LikeHandler= (likedpost)=>{
        
       setUserFavs((prevUserFavs) =>{
            
           return prevUserFavs.concat(likedpost)
          
       });
     }
     const DislikeHandler= (Dislikedpost)=>{
      setUserFavs((prevUserFavs) =>{
           return prevUserFavs.filter(post => post.id !== Dislikedpost)
       });    
     }
     const ItemislikedHandler= (postId)=>{
       
         return userFavs.some((el) => el.id === postId)  
         
       
     }
    const context={
      favs: userFavs,
      totalfavs: userFavs.length,
      addlike : LikeHandler,
      removelike : DislikeHandler,
      itemIsLiked : ItemislikedHandler,
    } ;
    return<FvaContext.Provider value={context}>
       {props.children}
    </FvaContext.Provider>
}

export default FvaContext


