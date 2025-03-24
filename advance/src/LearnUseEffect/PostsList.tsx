import { useEffect, useState } from "react";

const POST_API = "https://jsonplaceholder.typicode.com/posts";

// we need to define the shape of the data we are
// fetching from the API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(POST_API);
      const data = await res.json();
      setPosts(data);
      console.log("api fetched");
    })();

    // fetch(POST_API)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log("data: ", data);
    //     setPosts(data);
    //   });
  }, []);

  return (
    <div>
      <h2>API Fetching</h2>
      <div>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <div key={id}>
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}
