import React, { useEffect, useState } from "react";
import withFetch from "./withFetch";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function Posts(props: { data: Post[]; loading: boolean }) {
  const { data: posts, loading } = props;
  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default withFetch(Posts);

export function NormallyPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}
