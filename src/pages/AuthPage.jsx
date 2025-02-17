import React, { useState } from "react";
import SendOtpForm from "../components/templates/SendOtpForm";
import CheckOtpForm from "../components/templates/CheckOtpForm";

function AuthPage({step , setStep}) {
  // const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [code, setCode] = useState("");
  console.log("step :" ,step)
  return (
    <div>
      {step === 1 && (
        <SendOtpForm setStep={setStep} mobile={mobile} setMobile={setMobile} />
      )}
      {step === 2 && (
        <CheckOtpForm
          code={code}
          setCode={setCode}
          mobile={mobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}

export default AuthPage;
