"use client";
import { ArrowLeftIcon } from "@/assets/svg";
import { ButtonCustom } from "@/components";
import { Button, Form } from "antd";
import { InputOTP } from "antd-input-otp";
import React, { useEffect, useState } from "react";

type Props = {
    onBack?: () => void;
    onNext?: (e?: number) => void;
};

const LoginInputOTP = ({onBack, onNext}: Props) => {
  const [time, setTime] = useState(60);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // Clear interval when countdown reaches 0
    if (time === 0) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [time, isActive]);

  const formatTime = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const resetTimer = () => {
    setTime(60);
    setIsActive(true);  // Bật lại đếm ngược
  };

  return (
    <>
      <div className="login__btn-back">
        <ButtonCustom variant="none" className="btn-back" onClick={onBack}>
          <ArrowLeftIcon width={24} height={24} />
        </ButtonCustom>
      </div>
      <div className="login__title">Nhập mã OTP</div>
      <div className="login__otp-again">
        <Button
          type="link"
          className="login__otp-again__btn !p-0 !font-semibold"
          onClick={resetTimer}
        >
          Gửi lại mã
        </Button>
        <div className="login__otp-again__timer">
          {formatTime(minutes)}:{formatTime(seconds)} s
        </div>
      </div>
      <div className="login__input-otp">
        <Form.Item name="otp" className="base-input">
          <InputOTP length={6} />
        </Form.Item>
      </div>
      <div className="login__note">
        Chúng tôi vừa gửi một mã đăng nhập đến số điện thoại của bạn.
      </div>
      <ButtonCustom type="button" className="!rounded-[15px]" onClick={() => onNext && onNext(4)}>
        Tiếp tục
      </ButtonCustom>
    </>
  );
};

export default LoginInputOTP;
