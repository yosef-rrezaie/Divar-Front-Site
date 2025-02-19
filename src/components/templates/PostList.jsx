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
          <h3
            className="mt-[60px] mb-[30px] border-b-[3px] border-solid border-[#a62626] 
          w-fit pb-[5px]"
          >
            آگهی های شما
          </h3>
          {data?.data?.posts.map((post) => (
            <div key={post._id} className="flex items-center border-[2px] border-solid 
            border-[#eaeaea] rounded-[5px] mt-[10px] mb-[10px] p-[5px]  ">
              {/* <img src={`http://localhost:3400/${post.images[0]}`} /> */}
              <img src="download.jpg" className="w-[100px] h-[70px] rounded-[3px] ml-[30px]"/>
              <div className="w-screen">
                <p className="text-[.9rem]">{post?.options?.title}</p>
                <span className="text-[.8rem] text-gray-500">{post?.options?.content}</span>
              </div>
              <div className="w-[150px] text-center">
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
