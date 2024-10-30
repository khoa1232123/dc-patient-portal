import { LockBlueIcon } from "@/assets/svg";
import { ButtonCustom, InputCustom } from "@/components";
import { Checkbox, Form } from "antd";
import Link from "next/link";
import React from "react";

type Props = {
    onNext?: (e?: number) => void;
};

const LoginWithAccount = ({onNext}: Props) => {
  return (
    <div className="login-account">
      <div className="login-account__top">
        <div className="login-account__title">
          <LockBlueIcon width={24} height={24} />
          <span>Đăng nhập bằng tài khoản</span>
        </div>
        <div className="login-account__desc">
          Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
        </div>
      </div>
      <InputCustom
        className="w-full"
        name="phone"
        label="Số điện thoại"
        placeholder="Nhập"
        rules={[{ required: true, message: "" }]}
      />
      <InputCustom
        className="w-full"
        name="password"
        label="Mật khẩu"
        placeholder="Nhập"
        type="password"
        rules={[{ required: true, message: "" }]}
      />

      <Checkbox className="login-account__checkbox">
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

      <ButtonCustom type="submit" className="w-full" onClick={() => onNext && onNext(4)}>Tiếp tục</ButtonCustom>
    </div>
  );
};

export default LoginWithAccount;
