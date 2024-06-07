import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BlogContext } from "../context/BlogContext";
import { useAuth } from "../context/authContext";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addPost } = useContext(BlogContext);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Math.floor(Math.random() * 1000),
      title,
      body,
      creatorId: currentUser.uid,
      timestamp: Date.now(),
    };
    addPost(newPost);
    navigate("/feed");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {currentUser ? (
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Body:</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:text-black"
          >
            Create post
          </button>
        </form>
      ) : (
        <p className="text-xl">Please log in to create a post.</p>
      )}
    </div>
  );
};

export default PostForm;
