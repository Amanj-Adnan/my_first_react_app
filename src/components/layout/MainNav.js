import React from "react";

import { Link } from "react-router-dom";
import { ProductConsumer } from "../Statemanagment/Contex";

function MainNav() {
	return (
		<ProductConsumer>
		  {(value) => {
			const { LogoutUser } = value;
			return (
    <header className="">
      <nav className="bg-gray-800 p-2 mt-0 fixed w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <Link
              className="text-white no-underline hover:text-white hover:no-underline"
              to="/"
            >
              <span className="text-2xl ">
                <i className="em em-grinning"></i> ReactJS
              </span>
            </Link>
          </div>
          <div className="flex w-full text-lg  font-white pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
			<li className="mr-3">
                <Link
                  to="/new"
                  className="inline-block text-white no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >
                  Ceate a Post
                </Link>
              </li>
            
              <li className="mr-3">
                <Link
                  to="/fav"
                  className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >
                  Liked
                </Link>
              </li>

			  <li className="mr-3">
                <Link
                  to="/login"
                  className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >
                  Login
                </Link>
              </li>
			  <li className="mr-3">
                <Link
                  to="/register"
                  className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >
                  Register
                </Link>
              </li>
			  {localStorage.getItem("token")?
			  <li className="mr-3">
                <Link
                  to="/login"
				  onClick={LogoutUser}
                  className="inline-block text-gray-100 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                >
                  Logout
                </Link>
              </li>
			  :""
  }
            </ul>
          </div>
        </div>
      </nav>
    </header>
       );
	}}
  </ProductConsumer>
);
}
export default MainNav;
