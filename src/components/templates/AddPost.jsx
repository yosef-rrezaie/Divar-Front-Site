import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import api from "../../../configs/api";
import { getCookie } from "../../../configs/cookies";
import axios from "axios";

function AddPost() {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    images: null,
  });
  const { data } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => api.get("category"),
  });

  console.log(data);

  function changeHandler(e) {
    const name = e.target.name;
    if (name !== images) {
      setForm({ ...form, [name]: e.target.value });
    } else {
      console.log(e.target.files);
      setForm({ ...form, [name]: e.target.files[0] });
    }
  }

  // we cant send files and images with json so we use formData

  console.log(form);
  function addHandler(e) {
    e.preventDefault();
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }
    const token = getCookie("accessToken");
    axios
      .post("http://localhost:3400/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((erorr) => console.log(erorr));
  }

  return (
    <form onChange={changeHandler}>
      <h3 className="mb-[30px] border-b-[3px] border-solid border-[#a62626] w-fit pb-[5px]">
        افزودن آگهی
      </h3>
      <label htmlFor="title" className="block text-[.9rem] mb-[10px]">
        عنوان
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] focus:outline-none"
      />
      <label htmlFor="content" className="block text-[.9rem] mb-[10px]">
        توضیحات
      </label>
      <textarea
        name="content"
        id="content"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] 
        focus:outline-none h-[100px]"
      />
      <label htmlFor="amount" className="block text-[.9rem] mb-[10px]">
        قیمت
      </label>
      <input
        type="number"
        name="amount"
        id="amount"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] focus:outline-none"
      />
      <label htmlFor="city" className="block text-[.9rem] mb-[10px]">
        شهر
      </label>
      <input
        type="input"
        name="city"
        id="city"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] focus:outline-none"
      />
      <label htmlFor="category" className="block text-[.9rem] mb-[10px]">
        دسته بندی
      </label>
      <select
        name="category"
        id="category"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] focus:outline-none"
      >
        {data?.data?.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="images" className="block text-[.9rem] mb-[10px]">
        عکس
      </label>
      <input
        type="file"
        name="images"
        id="images"
        className="block w-[300px] p-[5px] border border-solid border-[#eaeaea] rounded-[5px] mb-[30px] focus:outline-none"
      />
      <button
        onClick={addHandler}
        className="bg-[#a62626]
       text-white border-none pt-[10px] pb-[10px] pr-[25px] pl-[25px]
        rounded-[5px] text-[.9rem] cursor-pointer"
      >
        ایجاد
      </button>
    </form>
  );
}

export default AddPost;
