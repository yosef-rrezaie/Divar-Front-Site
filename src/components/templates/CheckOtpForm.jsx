import React from "react";
import api from "../../../configs/api";
import { setCookie } from "../../../configs/cookies";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  const navigate = useNavigate();
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: () => api.get("user/whoami"),
  });
  function submitHandler(e) {
    e.preventDefault();

    if (code.length !== 5) return;

    try {
      const res = api.post("auth/check-otp", { mobile, code }).then((res) => {
        setCookie(res.data);
        navigate("/");
        refetch();
      });
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return (
    <form
      onSubmit={submitHandler}
      className="mt-[100px] max-w-[500px] m-auto flex flex-col border border-solid border-[#c0c0c0] rounded-[5px] p-[30px]"
    >
      <p className="text-lg font-normal mb-[20px]">تایید کد اس ام اس شده</p>
      <span className="text-[#c0c0c0] text-[.8rem] mb-[20px]">
        کد پیامک شده به شماره {mobile} را وارد کنید .
      </span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        className="mt-[10px] mb-[20px] p-[5px] border border-solid border-[#c0c0c0] rounded-[5px] focus:outline-none "
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button
        type="submit"
        className="w-fit pt-[5px] pb-[5px] pr-[15px] pl-[15px] border-none bg-[#a62626] text-white rounded-[5px]"
      >
        ورود
      </button>
      <button
        onClick={() => setStep(1)}
        className="mt-[13px] w-fit pt-[5px] pb-[5px] 
        pr-[15px] pl-[15px] text-red-700 rounded-[5px] border-[1px] border-red-700 border-solid"
      >
        تغییر شماره موبایل
      </button>
    </form>
  );
}

export default CheckOtpForm;
