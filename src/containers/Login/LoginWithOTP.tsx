import { LockBlueIcon } from "@/assets/svg";
import { ButtonCustom, InputCustom } from "@/components";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import React from "react";

type Props = {
    onNext?: (e?: number) => void
};

const LoginWithOTP = ({onNext}: Props) => {
  return (
    <div className="login-otp">
      <div className="login-otp__top">
        <div className="login-otp__title">
          <LockBlueIcon width={24} height={24} />
          <span>Đăng nhập bằng OTP</span>
        </div>
        <div className="login-otp__desc">
          Mã OTP sẽ được gửi đến số điện thoại
        </div>
      </div>
      <InputCustom
        className="w-full"
        name="phone"
        label="Số điện thoại"
        placeholder="Nhập"
        rules={[{ required: true, message: "" }]}
      />

      <Checkbox className="login-otp__checkbox">
        <span className="text-[14px]">
          Tôi đồng ý với{" "}
          <Link href="#" className="text-[#4080FF]">
            điều khoản sử dụng
          </Link>{" "}
          và{" "}
          <Link href="#" className="text-[#4080FF]">
            chính sách riêng
          </Link>{" "}
          tư của H247
        </span>
      </Checkbox>

      <ButtonCustom type="submit" className="w-full" onClick={() => onNext && onNext(3)}>Tiếp tục</ButtonCustom>
    </div>
  );
};

export default LoginWithOTP;
