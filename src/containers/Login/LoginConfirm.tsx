import { CalendarBlueIcon } from "@/assets/svg";
import { ButtonCustom, InputCustom } from "@/components";
import DatePickerCustom from "@/components/DatePickerCustom";
import FormItemCustom from "@/components/FormItemCustom";
import { DatePicker } from "antd";
import React from "react";

type Props = {
  onNext?: (e?: number) => void;
};

const LoginConfirm = ({ onNext }: Props) => {
  return (
    <>
      <div className="login__title">Xác nhận tài khoản</div>
      <div className="login__note text-[#4F5675]">
        Chúng tôi vừa gửi một mã đăng nhập đến số điện thoại của bạn.
      </div>
      <InputCustom
        className="w-full"
        name="phone"
        label="Họ và tên"
        placeholder="Nhập"
        rules={[{ required: true, message: "" }]}
      />
      <DatePickerCustom
        label="Ngày sinh"
        rules={[{ required: true, message: "" }]}
      />
      <ButtonCustom
        type="submit"
        className="!rounded-[15px]"
        onClick={(e) => onNext && onNext(1)}
      >
        Tiếp tục
      </ButtonCustom>
    </>
  );
};

export default LoginConfirm;
