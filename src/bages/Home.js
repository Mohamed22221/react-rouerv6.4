import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';


export async function loader() {
  const API = 'https://jsonplaceholder.typicode.com/posts?userId=1';

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch {
    throw new Response(null, {
      status: 500,
      statusText: 'Internal Server Error',
    });
  }
}

export default function Home() {
  const posts = useLoaderData();
  const { postId } = useParams();
  console.log(postId)
  return (
    <div>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={`post-${post.id}`}>
              <Link to={`posts/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts to show.</p>
      )}
    </div>
  );
}
