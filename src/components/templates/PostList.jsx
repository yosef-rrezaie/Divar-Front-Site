import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../../configs/api";

function PostList() {
  const { data, isFetching } = useQuery({
    queryKey: ["my-post-list"],
    queryFn: () => api.get("post/my"),
  });

  console.log(data);
  return (
    <div>
      {isFetching ? (
        <p>is loading ...</p>
      ) : (
        <>
          <h3>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id}>
              {/* <img src={`http://localhost:3400/${post.images[0]}`} /> */}
              <img src="download.jpg" />
              <div>
                <p>{post?.options?.title}</p>
                <span>{post?.options?.content}</span>
              </div>
              <div>
                <p>{post.createdAt}</p>
                <p>{post.amount} تومان</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
