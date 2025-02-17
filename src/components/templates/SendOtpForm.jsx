import React, { useEffect, useState } from "react";
import api from "../../../configs/api";
import axios from "axios";

function SendOtpForm({ mobile, setMobile, setStep }) {
  function submitHandler(e) {
    e.preventDefault();
    if (mobile.length !== 11) return;

    async function sendOtop() {
      try {
        const response = await api.post("auth/send-otp", { mobile });
        console.log(response);
        if (response) {
          setStep(2);
        }
      } catch (erorr) {
        console.log(erorr.message);
      }
    }
    sendOtop();
  }
  return (
    <div className="mt-[100px]">
      {/* {loading === 1 ? <p>Loading...</p> : null} */}
      <form
        onSubmit={submitHandler}
        className="max-w-[500px] m-auto flex flex-col border border-solid border-[#c0c0c0] rounded-[5px] p-[30px]"
      >
        <p className="text-lg font-normal mb-[20px]">ورود به حساب کاربری</p>
        <span className="text-[#c0c0c0] text-[.8rem] mb-[20px]">
          برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید ،
          کد تایید به این شماره پیامک خواهد شد.
        </span>
        <label htmlFor="input">شماره موبایل خود را وارد کنید :</label>
        <input
          className="mt-[10px] mb-[20px] p-[5px] border border-solid border-[#c0c0c0] rounded-[5px] focus:outline-none "
          type="text"
          id="input"
          placeholder="شماره موبایل :"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button
          type="submit"
          className="w-fit pt-[5px] pb-[5px] pr-[15px] pl-[15px] border-none bg-[#a62626] text-white rounded-[5px]"
        >
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOtpForm;
