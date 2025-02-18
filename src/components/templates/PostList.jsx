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
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <p>{post.amount.toLocaleString()} تومان</p>
              </div>
            </div>
            // <p>012</p>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
