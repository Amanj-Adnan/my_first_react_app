import { useContext}  from 'react'
import React from 'react'
import FvaContext from '../store/fav-context';


function Post(props) {
  const likeCtx = useContext(FvaContext)
  const itemIsLiked = likeCtx.itemIsLiked(props.id)
  const toggleLikeHandler = () =>{
   
      if(itemIsLiked){
        likeCtx.removelike(props.id)
      }else{
         
        likeCtx.addlike({
          id: props.id,
          title: props.title,
          address: props.address,
          description: props.description,
          image_url: props.image
        })
      }
  };
    return (
        <div className=" bg-gray-100  ">
       <div className=" p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
        <img className=" object-cover h-96 w-full  rounded-t-md" src={props.image} alt="nya" />
       <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-700">{props.title}</h1>
        <p className="text-sm mt-2 text-gray-700">{props.address}</p>
      
       <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
        {props.description}
        </div>
      <div>
        <button onClick={toggleLikeHandler} className="text-lg block font-semibold py-2 px-6 text-green-100 hover:text-white bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">{itemIsLiked ? "DisLike"  : "Like"}</button>
      </div>
    </div>
  </div>
</div>
    )
}

export default Post
