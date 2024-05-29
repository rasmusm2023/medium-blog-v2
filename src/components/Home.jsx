import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Home = () => {
  const { currentUser } = useAuth();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4 font-bold">Welcome to Medium</h1>
      {currentUser ? (
        <Link
          to="/feed"
          className="text-xl text-gray-700 hover:text-black underline"
        >
          Go to feed
        </Link>
      ) : (
        <Link
          to="/login"
          className="text-xl text-gray-700 hover:text-black underline"
        >
          Login
        </Link>
      )}
    </div>
  );
};

export default Home;
