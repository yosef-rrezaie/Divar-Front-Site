import React, { useEffect, useState } from "react";
import api from "../../../configs/api";
import axios from "axios";

function SendOtpForm({ mobile, setMobile, setStep }) {
  const [response, setResponse] = useState(null);
  const [loading , setLoading] = useState(0)

  function submitHandler(e) {
    setLoading(1)
    e.preventDefault();

    if (mobile.length !== 11) return;

    try {
      api.post("auth/send-otp", { mobile }).then((res) => {
        setStep(2);
        console.log(res);
        setResponse(res)
      });
    } catch (erorr) {
      console.log(erorr);
    }

    // axios.post("https://jsonplaceholder.typicode.com/posts" , {"userId" : 20}).then(res => console.log(res))
  }
  return (
    <div>
      {loading===1 ? <p>Loading...</p> : null}
      <form onSubmit={submitHandler}>
        <p>ورود به حساب کاربری</p>
        <p>
          برای استفاده از امکانات دیوار ، لطفا شماره موبایل خود را وارد کنید ،
          کد تایید به این شماره پیامک خواهد شد.
        </p>
        <label htmlFor="input">شماره موبایل خود را وارد کنید :</label>
        <input
          type="text"
          id="input"
          placeholder="شماره موبایل :"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <button type="submit">ارسال کد تایید</button>
      </form>
    </div>
  );
}

export default SendOtpForm;
