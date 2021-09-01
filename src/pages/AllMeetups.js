import React from 'react'
import PostList from '../components/PostList';
import { useState , useEffect } from 'react';



function AllMeetups() {

  const [load , setLoad] = useState(true);
   const [loadPosts , setLoadPosts] = useState([]);
    
   useEffect(()=>{
          fetch("http://127.0.0.1:8000/posts").then(res => {

        return res.json();

        }).then(data =>{
          setLoad(false);
          setLoadPosts(data);
          
        });
       
    
   },[]);
  
  if (load){
   
    return (
     <div>
       loding ......
     </div> 
     
    )

  }else{
  
     return (
      
        <section>
            <h1 className="text-2xl font-bold mt-2 ml-2">Home</h1>

            <PostList posts={loadPosts}/>
        </section>
    )
  }
   
}

export default AllMeetups
