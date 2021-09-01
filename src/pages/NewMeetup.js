import { useRef } from 'react'
import { useHistory } from "react-router-dom"
import React from 'react'

function NewMeetup() {
    const titleRef = useRef();
    const adressRef = useRef();
    const descriptionRef = useRef();
    const image_urlRef = useRef();
    const history = useHistory();

    const submitHandler = (event) =>{
       event.preventDefault()

       const enteredTitle = titleRef.current.value;
       const enteredAddress = adressRef.current.value;
       const enteredDescription = descriptionRef.current.value;
       const enteredImage_url = image_urlRef.current.value;

       const post={
        title: enteredTitle,
        address: enteredAddress,
        description: enteredDescription,
        image_url: enteredImage_url
       };

      
       fetch(
           
        'http://127.0.0.1:8000/posts',
        {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                'Content-Type' : 'application/json',
                 "Accept": "application/json"
            }
        }
       
       ).then(() => {

        history.replace('/');

       });
    }
    return (
        

        
            <div className="min-h-screen bg-gray-600 flex justify-center items-center">
                <div className="absolute w-60 h-60 rounded-xl bg-green-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
                <div className="absolute w-48 h-48 rounded-xl bg-green-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
                <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Create A Post</h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Create a Post to Publish Your Photos!</p>
                </div>
                <div className="space-y-4">
                <input id="title" type="text" placeholder="Title" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" ref={titleRef}/>
                <input  id="address" type="text" placeholder="Adress" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" ref={adressRef} />
                <textarea  id="description" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" cols="10" rows="5" placeholder="Content" ref={descriptionRef}>

                </textarea>
                <input  id="image_url" type="text" placeholder="Image URL" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"  ref={image_urlRef}/>
                </div>
                <div className="text-center mt-6">
                <button type="submit" onClick = {submitHandler} className="py-3 w-64 text-xl text-green-200 hover:text-white bg-green-400  rounded-2xl">Create Post</button>
                
                </div>
                </div>
                <div className="w-40 h-40 absolute bg-green-300 rounded-full top-0 right-12 hidden md:block"></div>
                <div className="w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
            </div>

    )
}

export default NewMeetup
