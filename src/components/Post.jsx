import React, { useState, useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { useAuth } from "../context/authContext";

const Post = ({ post }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedPost, setEditedPost] = useState(post);
  const { updatePost, deletePost } = useContext(BlogContext);
  const { currentUser } = useAuth();

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleChange = (e) => {
    setEditedPost({ ...editedPost, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePost(editedPost);
    setEditMode(false);
  };

  return (
    <div
      className="border-b border-gray-300 p-6 mb-6"
      style={{ maxWidth: "calc(2/3 * 100%)" }}
    >
      {editMode ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={editedPost.title}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-2 border rounded"
          />
          <textarea
            name="body"
            value={editedPost.body}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-2 border rounded"
          />
          <button
            type="submit"
            className="mr-2 px-4 py-2 rounded border border-gray-300 text-gray-700 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
          >
            Save
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          <p className="text-gray-800 mb-4">{post.body}</p>
          {currentUser && currentUser.uid === post.creatorId && (
            <>
              <button
                onClick={handleEdit}
                className="mr-2 px-4 py-2 rounded border border-gray-300 text-gray-700 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-white"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 rounded border border-gray-300 text-gray-700 transition duration-300 ease-in-out hover:bg-red-500 hover:text-white"
              >
                Delete
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Post;
