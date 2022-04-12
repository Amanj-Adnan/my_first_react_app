import React from "react";
import { ProductConsumer } from "../components/Statemanagment/Contex";
function NewMeetup() {

    
  return (
    <ProductConsumer>
      {(value) => {
        const { P_name, price,Add_Product, description, img_path, OnChangeHandler } = value;

        return (
          <div className="min-h-screen bg-gray-600 flex justify-center items-center">
            <div className="absolute w-60 h-60 rounded-xl bg-green-400 -top-5 -left-16 z-0 transform rotate-45 hidden md:block"></div>
            <div className="absolute w-48 h-48 rounded-xl bg-green-400 -bottom-6 -right-10 transform rotate-12 hidden md:block"></div>
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
              <div>
                <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">
                  Create A Post
                </h1>
                <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">
                  Create a Post to Publish Your Photos!
                </p>
              </div>
              <div className="space-y-4">
                <input
                  value={P_name}
                  name="P_name"
                  onChange={OnChangeHandler}
                  type="text"
                  placeholder="Name"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                />
                <input
                     value={price}
                     name="price"
                     onChange={OnChangeHandler}
                  type="text"
                  placeholder="Price"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
               
                />
                <textarea
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  cols="10"
                  rows="5"
                  value={description}
                  name="description"
                  onChange={OnChangeHandler}
                  placeholder="description"
                ></textarea>
                <input
                  type="text"
                  placeholder="Image URL"
                  className="block text-sm py-3 px-4 rounded-lg w-full border outline-none"
                  value={img_path}
                  name="img_path"
                  onChange={OnChangeHandler}
                />
              </div>
              <div className="text-center mt-6">
                <button
                  type="submit"
                  onClick={Add_Product}
                  className="py-3 w-64 text-xl text-green-200 hover:text-white bg-green-400  rounded-2xl"
                >
                  Create Post
                </button>
              </div>
            </div>
            <div className="w-40 h-40 absolute bg-green-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div className="w-20 h-40 absolute bg-green-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block"></div>
          </div>
        );
      }}
    </ProductConsumer>
  );
}

export default NewMeetup;
