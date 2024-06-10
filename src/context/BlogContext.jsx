import React, { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const storedPosts = localStorage.getItem("posts");
    if (storedPosts) {
      const postsWithComments = JSON.parse(storedPosts).map((post) => ({
        ...post,
        comments: post.comments || [],
      }));
      setPosts(postsWithComments);
    } else {
      const defaultPosts = [
        {
          id: 1,
          title: "The Future of AI: What to Expect in the Next Decade",
          body: "Artificial Intelligence is evolving rapidly. In the next ten years, expect advancements in AI to revolutionize healthcare, education, and transportation. Stay ahead by learning about AI trends and technologies today.",
          comments: [],
        },
        {
          id: 2,
          title: "5 JavaScript Frameworks You Should Learn in 2024",
          body: "JavaScript remains the backbone of web development. To stay relevant, familiarize yourself with popular frameworks like React, Vue, Angular, Svelte, and Next.js. Each offers unique benefits for building modern web applications.",
          comments: [],
        },
        {
          id: 3,
          title: "How to Build a Personal Brand on LinkedIn",
          body: "LinkedIn is a powerful platform for professionals. Build your brand by sharing valuable content, engaging with industry leaders, and showcasing your skills and achievements. A strong LinkedIn presence can open doors to new opportunities.",
          comments: [],
        },
      ];
      setPosts(defaultPosts);
      localStorage.setItem("posts", JSON.stringify(defaultPosts));
    }
  }, []);

  const savePostsToLocalStorage = (posts) => {
    localStorage.setItem("posts", JSON.stringify(posts));
  };

  const addPost = (post) => {
    const newPost = { ...post, comments: [] };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  const updatePost = (updatedPost) => {
    const updatedPosts = posts.map((post) =>
      post.id === updatedPost.id ? updatedPost : post
    );
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  const deletePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
    savePostsToLocalStorage(updatedPosts);
  };

  return (
    <BlogContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </BlogContext.Provider>
  );
};
