"use client";
import { ButtonCustom } from "@/components";
import { useState } from "react";
import LoginWithAccount from "./LoginWithAccount";
import { Form } from "antd";
import { useForm } from "antd/es/form/Form";
import LoginWithOTP from "./LoginWithOTP";
import LoginInputOTP from "./LoginInputOTP";
import LoginConfirm from "./LoginConfirm";

type Props = {};

const Login = (props: Props) => {
  const [form] = useForm();
  const [step, setStep] = useState(1);

  const handleNext = (value?: number) => {
    setStep((prev) => value ? value : prev + 1);
  }

  return (
    <Form form={form} layout="vertical">
      <div className="login">
        {(step === 1 || step === 2) && (
          <>
            <div className="login__title">Đăng nhập</div>
            <div className="login__btns">
              <ButtonCustom
                type="button"
                variant={step === 2 ? "none" : "outline"}
                className="login__btns__btn"
                onClick={() => setStep(1)}
              >
                Tài khoản
              </ButtonCustom>
              <ButtonCustom
                type="button"
                variant={step === 1 ? "none" : "outline"}
                className="base-btn login__btns__btn login__btns__btn--otp"
                onClick={() => setStep(2)}
              >
                OTP
              </ButtonCustom>
            </div>
            {step === 1 && <LoginWithAccount onNext={handleNext} />}
            {step === 2 && <LoginWithOTP onNext={handleNext} />}
          </>
        )}
        {step === 3 && (
            <LoginInputOTP onBack={() => setStep(1)} onNext={handleNext} />
        )}
        {step === 4 && (
            <LoginConfirm onNext={handleNext} />
        )}
      </div>
    </Form>
  );
};

export default Login;
