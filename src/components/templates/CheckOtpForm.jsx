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
