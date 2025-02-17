import React from "react";
import api from "../../../configs/api";
import { use } from "react";
import { useQuery } from "@tanstack/react-query";

function CategoryList() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => api.get("category"),
  });
  console.log(data);
  return (
    <div className="mt-[50px] mb-[70px] ">
      {data?.data?.map((i) => (
        <div key={i._id} className="flex mt-[20px] mb-[20px] p-[15px] 
        border-[2px] border-solid border-[#eaeaea] ">
            <img src={`${i.icon}.svg`}/>
          <h5 className="mr-[10px] text-[.9rem] w-[120px]">{i.name}</h5>
          <p className="w-screen text-left text-[#a62626]">slug : {i.slug}</p>
        </div>
      ))}
    </div>
  );
}

export default CategoryList;
