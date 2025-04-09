import React, { useEffect, useState } from "react";

// rules of hooks:
// 1. hooks should always start with "use"
// 2. hooks can only be called inside a Component or a custom hook

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Lecture() {
  const {
    data: posts,
    loading,
    error,
  } = useFetch<Post[]>({
    url: "https://jsonplaceholder.typicode.com/posts",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!posts || posts.length === 0) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      <h1>Lecture</h1>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface UseFetchParams {
  url: string;
}

function useFetch<T>({ url }: UseFetchParams) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!posts.length) {
    return <div>No posts found</div>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
