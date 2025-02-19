import { useQuery } from "@tanstack/react-query";
import React from "react";
import api from "../../../configs/api";

function SideBar() {
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => api.get("category"),
  });

  console.log(data);
  return (
    <div className="mt-[30px] w-[200px]">
      <h4>دسته ها</h4>
      <ul>
        {data?.data?.map((category) => (
          <li key={category._id} className="flex mt-[20px] mb-[20px]">
            <img src={`${category.icon}.svg`} />
            <p className="font-extralight mr-[10px] text-gray-600">{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
