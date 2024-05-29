import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import PostList from "./PostList";
import { useAuth } from "../context/authContext";

const Feed = () => {
  const { posts } = useContext(BlogContext);
  const { currentUser } = useAuth();

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl">Please log in to view the feed.</p>
      </div>
    );
  }

  return (
    <div className="p-4 container mx-auto">
      <div className="flex items-center mb-4 mt-8">
        <h1 className="text-3xl font-bold mr-8">Feed</h1>
        <Link
          to="/create-post"
          className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          New post +
        </Link>
      </div>
      <PostList posts={posts} />
    </div>
  );
};

export default Feed;
