import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  const { id } = useParams(); // Get dynamic parameter from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Simulate fetching data from an API or database
    const fetchPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };
    fetchPost();
  }, [id]); // Dependency array ensures effect runs when `id` changes

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
