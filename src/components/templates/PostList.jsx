import {useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../../configs/api";

function PostList() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-post-list"],
    queryFn: () => api.get("post/my"),
  });

  console.log(data)
  return <div>PostList</div>;
}

export default PostList;
