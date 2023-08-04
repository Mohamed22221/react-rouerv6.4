import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export async function loader({ params }) {
  const API = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error();

    const data = await response.json();
    return data;
  } catch {
    if (isNaN(params.postId)) {
      throw new Response(null, {
        statusText: "please make sure to insert correct post id",
        status: 400,
      });
    }
    throw new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
const PostDetails = () => {
  const { postId } = useParams();
  const post = useLoaderData(postId);
  return <div>{post.title}</div>;
};

export default PostDetails;
