import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { auth } from "../firebase/firebase";

const Navbar = () => {
  const location = useLocation();
  const { currentUser } = useAuth();

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav className="border-b border-gray-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="size-40 h-10">
          <img
            src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png"
            alt="Medium Logo"
          />
        </Link>
        <div>
          <Link
            to="/"
            className={`mr-4 p-2 text-gray-700 ${
              location.pathname === "/" ? "font-bold underline" : ""
            } hover:text-gray-400 transition duration-300 ease-in-out`}
          >
            Home
          </Link>
          {currentUser ? (
            <>
              <Link
                to="/feed"
                className={`mr-4 p-2 text-gray-700 ${
                  location.pathname === "/feed" ? "font-bold underline" : ""
                } hover:text-gray-400 transition duration-300 ease-in-out`}
              >
                Feed
              </Link>
              <Link
                to="/create-post"
                className="px-4 m-2 py-4 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                New post +
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 m-2 p-2 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
              >
                Logout
              </button>
              <span className="px-4 py-2 text-blue-500 font-bold">
                {currentUser.email}
              </span>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 p-2 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-800 hover:text-white transition duration-300 ease-in-out"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
