import React from "react";
import api from "../../../configs/api";
import setCookie from "../../../configs/cookies";

function CheckOtpForm({ code, setCode, mobile, setStep }) {
  function submitHandler(e) {
    e.preventDefault();

    if (code.length !== 5) return;

    try {
      const res = api.post("auth/check-otp", { mobile, code }).then((res) => {
        setCookie(res.data)
      });
    } catch (erorr) {
      console.log(erorr);
    }
  }
  return (
    <form onSubmit={submitHandler}>
      <p>تایید کد اس ام اس شده</p>
      <span>کد پیامک شده به شماره {mobile} را وارد کنید .</span>
      <label htmlFor="input">کد تایید را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
    </form>
  );
}

export default CheckOtpForm;
