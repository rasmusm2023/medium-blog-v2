import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useAuth } from "../context/authContext";

const CommentForm = ({ postId }) => {
  const [commentText, setCommentText] = useState("");
  const { addComment } = useContext(BlogContext);
  const { currentUser } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      username: currentUser.email,
      text: commentText,
      timestamp: Date.now(),
    };
    addComment(postId, comment);
    setCommentText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Add a comment"
        className="w-full px-4 py-2 mb-2 border rounded"
        required
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 rounded border border-gray-300 text-gray-700 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
      >
        Add comment
      </button>
    </form>
  );
};

export default CommentForm;
