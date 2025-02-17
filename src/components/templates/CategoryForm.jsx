import React, { useState } from "react";

function CategoryForm() {
  const [form, setForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });
  function changeHandler(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <form onChange={changeHandler} onSubmit={submitHandler}>
      <h3
        className="mb-[30px] border-b-[3px]
        border-b-[#a62626] border-solid w-fit pb-[5px]"
      >
        دسته بندی جدید
      </h3>
      <p
        className="bg-[#a62626] mb-[20px] text-white p-[5px] 
      text-center rounded-[5px] hidden"
      ></p>
      <label htmlFor="name" className="block text-[.9rem] mb-[10px]">
        اسم دسته بندی
      </label>
      <input
        type="text"
        name="name"
        id="name"
        className="block w-[300px] 
      p-[5px] border border-solid border-[#c0c0c0] rounded-[5px] mb-[30px] focus:outline-none "
      />
      <label htmlFor="slug" className="block text-[.9rem] mb-[10px]">
        اسلاگ
      </label>
      <input
        type="text"
        name="slug"
        id="slug"
        className="block w-[300px] 
      p-[5px] border border-solid border-[#c0c0c0] rounded-[5px] mb-[30px] focus:outline-none "
      />
      <label htmlFor="icon" className="block text-[.9rem] mb-[10px]">
        آیکون
      </label>
      <input
        type="text"
        name="icon"
        id="icon"
        className="block w-[300px] 
      p-[5px] border border-solid border-[#c0c0c0] rounded-[5px] mb-[30px] focus:outline-none "
      />
      <button
        type="submit"
        className="bg-[#a62626] text-white 
      border-none pt-[10px] pr-[25px] pb-[10px] pl-[25px] rounded-[5px] text-[.9rem] cursor-pointer"
      >
        ایجاد
      </button>
    </form>
  );
}

export default CategoryForm;
